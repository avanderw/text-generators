package net.avdw.text.generators;

import picocli.CommandLine.Command;
import picocli.CommandLine.Model.CommandSpec;
import picocli.CommandLine.Spec;

@Command(name = "fantasy", description = "Fantasy names",
        versionProvider = MainVersion.class, mixinStandardHelpOptions = true)
public class FantasyCli implements Runnable {
    @Spec private CommandSpec spec;

    @Override
    public void run() {
        spec.commandLine().usage(spec.commandLine().getOut());
    }
}
