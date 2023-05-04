import { Text } from "@eduardofl/design-system/components/Text";
import { sum } from "@eduardofl/utils/math/sum";

export default function HomeScreen() {
  return (
    <main>
      <Text tag="h1">Home screen!</Text>
      <Text tag="p">
        Testando a função sum do package utils - sum(157, 456): {sum(157, 456)}
      </Text>
    </main>
  );
}
