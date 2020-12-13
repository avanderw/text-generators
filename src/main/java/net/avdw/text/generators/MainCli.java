package net.avdw.text.generators;

import net.avdw.cli.ChangelogCli;
import net.avdw.discord.DiscordCli;
import org.tinylog.Logger;
import picocli.CommandLine.Command;
import picocli.CommandLine.Model.CommandSpec;
import picocli.CommandLine.Spec;

@Command(name = "text-generators", description = "Random text generators",
        versionProvider = MainVersion.class, mixinStandardHelpOptions = true,
        subcommands = {DiscordCli.class, ChangelogCli.class})
public class MainCli implements Runnable {
    @Spec private CommandSpec spec;

    @Override
    public void run() {
        Logger.debug("MainCli.java entry point. Start coding here");
        spec.commandLine().usage(spec.commandLine().getOut());
    }
}
