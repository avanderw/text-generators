package net.avdw.text.generators;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.Module;
import picocli.CommandLine;

/**
 * Wrapper to integrate guice with picocli.
 * <p>
 * The aim is to have one class that can be copied between projects.
 * The reason is that I hate dependency management on my own classes.
 * I have no problem with duplication, it makes code more modular.
 *
 * @version 2020-10-07: Added javadoc
 */
final class GuiceFactory implements CommandLine.IFactory {
    private final Injector injector;

    GuiceFactory(final Module module) {
        injector = Guice.createInjector(module);
    }

    @Override
    public <K> K create(final Class<K> aClass) {
        return injector.getInstance(aClass);
    }

}
