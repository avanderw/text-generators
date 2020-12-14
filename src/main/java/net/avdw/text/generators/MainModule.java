package net.avdw.text.generators;

import com.google.inject.AbstractModule;
import com.google.inject.Provides;
import com.google.inject.Singleton;
import com.google.inject.name.Names;
import org.reflections.Reflections;
import picocli.CommandLine;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Locale;
import java.util.Properties;
import java.util.ResourceBundle;
import java.util.Set;

class MainModule extends AbstractModule {
    @Override
    protected void configure() {
        bind(List.class).to(LinkedList.class);
        bind(Set.class).to(HashSet.class);
        bind(ResourceBundle.class).toInstance(ResourceBundle.getBundle("messages", Locale.getDefault()));

        PropertyFile propertyFile = new PropertyFile();
        Properties properties = propertyFile.read("discord");
        Names.bindProperties(binder(), properties);
    }

    @Provides
    @Singleton
    CommandLine commandLine() {
        GuiceFactory factory = new GuiceFactory(this);
        CommandLine commandLine =  new CommandLine(MainCli.class, factory);

        CommandLine fantasy = new CommandLine(FantasyCli.class, factory);
        commandLine.addSubcommand(fantasy);
        Reflections reflections = new Reflections("net.avdw.text.generators.fantasy");
        reflections.getTypesAnnotatedWith(CommandLine.Command.class).forEach(fantasy::addSubcommand);

        CommandLine place = new CommandLine(PlaceCli.class, factory);
        commandLine.addSubcommand(place);
        reflections = new Reflections("net.avdw.text.generators.place");
        reflections.getTypesAnnotatedWith(CommandLine.Command.class).forEach(place::addSubcommand);

        CommandLine real = new CommandLine(RealCli.class, factory);
        commandLine.addSubcommand(real);
        reflections = new Reflections("net.avdw.text.generators.real");
        reflections.getTypesAnnotatedWith(CommandLine.Command.class).forEach(real::addSubcommand);

        return commandLine;
    }
}
