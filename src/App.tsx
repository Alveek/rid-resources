import { useEffect, useState } from 'react';
import {
  Container,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
  Heading,
  Box,
} from '@chakra-ui/react';

export default function App() {
  type KoefType = number;

  const [resTotal, setResTotal] = useState(0);
  const [devTotal, setDevTotal] = useState(0);
  const [k1, setK1] = useState(0);
  const [k2, setK2] = useState(0);
  const [k3, setK3] = useState(0);
  const [k4, setK4] = useState(0);
  const [k5, setK5] = useState(0);
  const [k6, setK6] = useState(0);
  const [k7, setK7] = useState(0);

  const getResourcesTotal = (): number => {
    let result = 0;
    if (k1 && k2 && k3 && k4) {
      result = +(0.87 * k1 + 0.53 * k2 + 0.69 * k3 + 0.53 * k4).toFixed(2);
      return result;
    }
    return 0;
  };

  const getDevelopmentTotal = (): number => {
    let result = 0;
    if (k5 && k6 && k7) {
      result = +(0.6 * k5 + 0.74 * k6 + 0.81 * k7).toFixed(2);
      return result;
    }
    return 0;
  };

  const getDiff = (): number => {
    if (resTotal && devTotal) {
      return devTotal / resTotal;
    }
    return 0;
  };

  useEffect(() => {
    setResTotal(getResourcesTotal);
    setDevTotal(getDevelopmentTotal);
  }, [k1, k2, k3, k4, k5, k6, k7]);

  console.log(resTotal);
  return (
    <Container maxW="container.md">
      <Heading as="h1" size="lg" textAlign="center" my={10}>
        Пояснение РИД Развитие и Ресурсы
      </Heading>

      <TableContainer>
        <Table colorScheme="blue" size="sm">
          <TableCaption placement="top" fontSize={18}>
            Компонента "Ресурсы"
          </TableCaption>
          <Thead>
            <Tr>
              <Th color="black">Показатель</Th>
              <Th color="black" textAlign="center">
                Значение
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Доля высокотехнологичной продукции в выпуске, %</Td>
              <Td isNumeric>
                <Input
                  min={0}
                  type="number"
                  variant="outline"
                  size="md"
                  width="100px"
                  textAlign="right"
                  height={7}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    console.log(e.target.value.length);
                    setK1(Number(e.target.value));
                  }}
                />
              </Td>
            </Tr>
            <Tr>
              <Td>
                Доля внутренних затрат на исследования и разработки в выпуске, %
              </Td>
              <Td isNumeric>
                {' '}
                <Input
                  min={0}
                  type="number"
                  variant="outline"
                  size="md"
                  width="100px"
                  textAlign="right"
                  height={7}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setK2(Number(e.target.value))
                  }
                />
              </Td>
            </Tr>
            <Tr>
              <Td>Добавленная стоимость на человека, млн</Td>
              <Td isNumeric>
                {' '}
                <Input
                  min={0}
                  type="number"
                  variant="outline"
                  size="md"
                  width="100px"
                  textAlign="right"
                  height={7}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setK3(Number(e.target.value))
                  }
                />
              </Td>
            </Tr>
            <Tr>
              <Td>Доля инвестиций в основной капитал в выпуске, %</Td>
              <Td isNumeric>
                <Input
                  min={0}
                  type="number"
                  variant="outline"
                  size="md"
                  width="100px"
                  textAlign="right"
                  height={7}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setK4(Number(e.target.value))
                  }
                />
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Итог</Th>
              <Th isNumeric>{resTotal}</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      <TableContainer maxW="780px">
        <Table colorScheme="blue" size="sm">
          <TableCaption placement="top" fontSize={18}>
            Компонента "Развитие"
          </TableCaption>
          <Tbody>
            <Tr>
              <Td width="462px">Индекс промышленного производства, %</Td>
              <Td isNumeric>
                <Input
                  min={0}
                  type="number"
                  variant="outline"
                  size="md"
                  width="100px"
                  textAlign="right"
                  height={7}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setK5(Number(e.target.value))
                  }
                />
              </Td>
            </Tr>
            <Tr>
              <Td width="462px">
                Индекс физического объема добавленной стоимости, %
              </Td>
              <Td isNumeric>
                <Input
                  min={0}
                  type="number"
                  variant="outline"
                  size="md"
                  width="100px"
                  textAlign="right"
                  height={7}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setK6(Number(e.target.value))
                  }
                />
              </Td>
            </Tr>
            <Tr>
              <Td width="462px">Структура ВДС добыча, %</Td>
              <Td isNumeric>
                <Input
                  min={0}
                  type="number"
                  variant="outline"
                  size="md"
                  width="100px"
                  textAlign="right"
                  height={7}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setK7(Number(e.target.value))
                  }
                />
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Итог</Th>
              <Th isNumeric>{devTotal}</Th>
            </Tr>
            <Tr>
              <Th>Соотношение Развитие / Ресурсы</Th>
              <Th isNumeric>{getDiff()}</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Container>
  );
}
