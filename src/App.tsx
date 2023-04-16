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
  Button,
  Text,
} from '@chakra-ui/react';

export default function App() {
  const [resTotal, setResTotal] = useState(0);
  const [devTotal, setDevTotal] = useState(0);
  const [results, setResults] = useState(0);
  const [message, setMessage] = useState('');
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
      result = parseFloat((0.87 * k1 + 0.53 * k2 + 0.69 * k3 + 0.53 * k4).toFixed(2));
      return result;
    }
    return 0;
  };

  const getDevelopmentTotal = (): number => {
    let result = 0;
    if (k5 && k6 && k7) {
      result = parseFloat((0.6 * k5 + 0.74 * k6 + 0.81 * k7).toFixed(2));
      return result;
    }
    return 0;
  };

  const getDiff = (): number => {
    let result = 0;
    if (resTotal && devTotal) {
      result = devTotal / resTotal;
      setResults(result);
    }
    return 0;
  };

  const getResultsText = (value: number): string => {
    if (value > 1) {
      setMessage(
        'Ресурсы и производственный потенциал предприятия используются эффективно',
      );
    } else if (value < 1) {
      setMessage(
        'Ресурсы и производственный потенциал предприятия используются неэффективно, необходима корректировка производственной политики',
      );
    }
    return '';
  };

  useEffect(() => {
    setResTotal(getResourcesTotal);
    setDevTotal(getDevelopmentTotal);
    getDiff();
  }, [k1, k2, k3, k4, k5, k6, k7]);

  console.log(results);
  return (
    <Container
      maxW='container.md'
      display='flex'
      flexDirection='column'
      my={10}>
      <Heading
        as='h1'
        size='lg'
        textAlign='center'>
        Пояснение РИД Развитие и Ресурсы
      </Heading>
      <TableContainer>
        <Table
          colorScheme='blue'
          size='sm'>
          <TableCaption
            placement='top'
            fontSize={18}>
            Компонента "Ресурсы"
          </TableCaption>
          <Thead>
            <Tr>
              <Th color='black'>Показатель</Th>
              <Th
                color='black'
                textAlign='center'>
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
                  type='number'
                  variant='outline'
                  size='md'
                  width='100px'
                  textAlign='right'
                  height={7}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    console.log(e.target.value.length);
                    setK1(Number(e.target.value));
                  }}
                />
              </Td>
            </Tr>
            <Tr>
              <Td>Доля внутренних затрат на исследования и разработки в выпуске, %</Td>
              <Td isNumeric>
                {' '}
                <Input
                  min={0}
                  type='number'
                  variant='outline'
                  size='md'
                  width='100px'
                  textAlign='right'
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
                  type='number'
                  variant='outline'
                  size='md'
                  width='100px'
                  textAlign='right'
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
                  type='number'
                  variant='outline'
                  size='md'
                  width='100px'
                  textAlign='right'
                  height={7}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setK4(Number(e.target.value))
                  }
                />
              </Td>
            </Tr>
          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th>Итог</Th>
              <Th isNumeric>{resTotal}</Th>
            </Tr>
          </Tfoot> */}
        </Table>
      </TableContainer>
      <TableContainer
        maxW='780px'
        mb={10}>
        <Table
          colorScheme='blue'
          size='sm'>
          <TableCaption
            placement='top'
            fontSize={18}>
            Компонента "Развитие"
          </TableCaption>
          <Tbody>
            <Tr>
              <Td width='462px'>Индекс промышленного производства, %</Td>
              <Td isNumeric>
                <Input
                  min={0}
                  type='number'
                  variant='outline'
                  size='md'
                  width='100px'
                  textAlign='right'
                  height={7}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setK5(Number(e.target.value))
                  }
                />
              </Td>
            </Tr>
            <Tr>
              <Td width='462px'>Индекс физического объема добавленной стоимости, %</Td>
              <Td isNumeric>
                <Input
                  min={0}
                  type='number'
                  variant='outline'
                  size='md'
                  width='100px'
                  textAlign='right'
                  height={7}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setK6(Number(e.target.value))
                  }
                />
              </Td>
            </Tr>
            <Tr>
              <Td width='462px'>Структура ВДС добыча, %</Td>
              <Td isNumeric>
                <Input
                  min={0}
                  type='number'
                  variant='outline'
                  size='md'
                  width='100px'
                  textAlign='right'
                  height={7}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setK7(Number(e.target.value))
                  }
                />
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            {/* <Tr>
              <Th>Итог</Th>
              <Th isNumeric>{devTotal}</Th>
            </Tr> */}
            <Tr>
              <Th>Соотношение Развитие / Ресурсы</Th>
              <Th isNumeric>{results.toFixed(2)}</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Button
        alignSelf='end'
        onClick={() => {
          setResults(getDiff);
          setMessage(getResultsText);
        }}>
        Рассчитать
      </Button>

      <Box>
        <Heading as='h3'>Выводы</Heading>
        <Text>{message}</Text>
      </Box>
    </Container>
  );
}
