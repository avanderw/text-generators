package net.avdw.text.generators;

import org.junit.BeforeClass;
import org.junit.Test;

public class MainCliTest {

    private static CliTester cliTester;

    @BeforeClass
    public static void beforeClass() {
        cliTester = new CliTester(MainCli.class, new TestGuiceFactory(new TestModule()));
    }

    @Test
    public void testEmpty() {
        cliTester.execute().success().contains("Usage");
    }

    @Test
    public void testVersion() {
        cliTester.execute("--version").success();
    }

}