package net.avdw.text.generators;

import org.apache.commons.text.CaseUtils;

import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @version 2020-12-07 Implemented
 */
public class SubCommandCliGenerator {
    public static final String version = "2020-12-07";
    static final String date = new SimpleDateFormat("yyyy-MM-dd").format(new Date());
    static final Path generatedPath = Paths.get("target/generated-sources");
    static final Path generatedTestPath = Paths.get("target/generated-test-sources");

    public static void main(String[] args) throws URISyntaxException, IOException {
        String subcommandTemplate = new String(Files.readAllBytes(Paths.get(Main.class.getResource("/templates/subcommand-cli.template").toURI())));
        String subcommandTestTemplate = new String(Files.readAllBytes(Paths.get(Main.class.getResource("/templates/subcommand-cli-test.template").toURI())));
        String typeTestTemplate = new String(Files.readAllBytes(Paths.get(Main.class.getResource("/templates/type-test.template").toURI())));

        Path base = Paths.get("./src/main/resources/scripts");
        Files.walkFileTree(base, new SimpleFileVisitor<>() {
            List<String> methodList;
            String type;
            String typeCamel;

            @Override
            public FileVisitResult postVisitDirectory(final Path dir, final IOException exc) throws IOException {
                String typeTest = typeTestTemplate
                        .replace("{{date}}", date)
                        .replace("{{generator}}", SubCommandCliGenerator.class.getCanonicalName())
                        .replace("{{version}}", version)
                        .replace("{{typeCamel}}", typeCamel)
                        .replace("{{methods}}", String.join("\n\n", methodList));

                Path typeTestPath = generatedTestPath.resolve("net/avdw/text/generators").resolve(type).resolve(String.format("%sGeneratorTest.java", typeCamel));
                Files.createDirectories(typeTestPath.getParent());
                Files.write(typeTestPath, typeTest.getBytes());
                return super.postVisitDirectory(dir, exc);
            }

            @Override
            public FileVisitResult preVisitDirectory(final Path dir, final BasicFileAttributes attrs) throws IOException {
                if (!dir.equals(base)) {
                    type = dir.getName(dir.getNameCount() - 1).toString();
                    if (type.equals("utility")) {
                        return FileVisitResult.SKIP_SUBTREE;
                    }
                    typeCamel = CaseUtils.toCamelCase(type, true, '-');
                    System.out.println(typeCamel);
                    methodList = new ArrayList<>();
                }
                return super.preVisitDirectory(dir, attrs);
            }

            @Override
            public FileVisitResult visitFile(final Path file, final BasicFileAttributes attrs) throws IOException {
                String fileName = file.getName(file.getNameCount() - 1).toString();
                String name = fileName.substring(0, fileName.lastIndexOf("."));
                String nameCamel = CaseUtils.toCamelCase(name, true, '-');
                System.out.println("\t" + nameCamel);
                String subCommand = subcommandTemplate
                        .replace("{{type}}", type)
                        .replace("{{date}}", date)
                        .replace("{{generator}}", SubCommandCliGenerator.class.getCanonicalName())
                        .replace("{{version}}", version)
                        .replace("{{name}}", name)
                        .replace("{{nameCamel}}", nameCamel);
                String method = subcommandTestTemplate
                        .replace("{{name}}", name)
                        .replace("{{nameCamel}}", nameCamel);
                methodList.add(method);

                Path subCommandPath = generatedPath.resolve("net/avdw/text/generators").resolve(type).resolve(String.format("%sCli.java", nameCamel));
                Files.createDirectories(subCommandPath.getParent());
                Files.write(subCommandPath, subCommand.getBytes());
                return super.visitFile(file, attrs);
            }
        });
    }
}
