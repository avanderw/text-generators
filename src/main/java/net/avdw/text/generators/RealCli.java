package net.avdw.text.generators;

import picocli.CommandLine.Command;
import picocli.CommandLine.Model.CommandSpec;
import picocli.CommandLine.Spec;

@Command(name = "real", description = "Real names",
        versionProvider = MainVersion.class, mixinStandardHelpOptions = true)
public class RealCli implements Runnable {
    @Spec private CommandSpec spec;

    @Override
    public void run() {
        spec.commandLine().usage(spec.commandLine().getOut());
    }
}
