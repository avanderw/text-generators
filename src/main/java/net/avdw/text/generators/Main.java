package net.avdw.text.generators;

import com.google.inject.Guice;
import com.google.inject.Injector;
import picocli.CommandLine;

import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;

public final class Main {
    private Main() {
    }

    public static void main(final String[] args) {
        Injector injector = Guice.createInjector(new MainModule());
        CommandLine commandLine = injector.getInstance(CommandLine.class);
        PrintWriter out = new PrintWriter(new OutputStreamWriter(System.out, StandardCharsets.UTF_8));
        PrintWriter err = new PrintWriter(new OutputStreamWriter(System.err, StandardCharsets.UTF_8), true);
        commandLine.setOut(out);
        commandLine.setErr(err);
        commandLine.setCaseInsensitiveEnumValuesAllowed(true);
        commandLine.execute(args);
        out.flush();
    }
}
