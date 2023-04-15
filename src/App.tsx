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
  return (
    <Container maxW='container.md'>
      <Heading
        as='h1'
        size='lg'
        textAlign='center'
        my={10}>
        Пояснение РИД Развитие и Ресурсы
      </Heading>

      <TableContainer>
        <Table
          colorScheme='blue'
          size='sm'>
          <TableCaption placement='top'>Компонента "Ресурсы"</TableCaption>
          <Thead>
            <Tr>
              <Th color='black'>Показатель</Th>
              <Th color='black'>Коэффициент</Th>
              <Th
                color='black'
                textAlign='center'>
                Значение
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Доля высокотехнол продукции в выпуске, %</Td>
              <Td>0.87</Td>
              <Td isNumeric>
                <Input
                  type='number'
                  variant='outline'
                  size='md'
                  width='100px'
                  textAlign='right'
                  height={7}
                />
              </Td>
            </Tr>
            <Tr>
              <Td>Доля внутр затрат на исследования и разработки в выпуске, %</Td>
              <Td>0.53</Td>
              <Td isNumeric>
                {' '}
                <Input
                  type='number'
                  variant='outline'
                  size='md'
                  width='100px'
                  textAlign='right'
                  height={7}
                />
              </Td>
            </Tr>
            <Tr>
              <Td>Добавленная стоимость на человека, млн</Td>
              <Td>0.69</Td>
              <Td isNumeric>
                {' '}
                <Input
                  type='number'
                  variant='outline'
                  size='md'
                  width='100px'
                  textAlign='right'
                  height={7}
                />
              </Td>
            </Tr>
            <Tr>
              <Td>Доля инвестиций в основной капитал в выпуске, %</Td>
              <Td>0.53</Td>
              <Td isNumeric>
                {' '}
                <Input
                  type='number'
                  variant='outline'
                  size='md'
                  width='100px'
                  textAlign='right'
                  height={7}
                />
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th>Итог</Th>
              <Th isNumeric>0</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      <TableContainer maxW='780px'>
        <Table
          colorScheme='blue'
          size='sm'>
          <TableCaption placement='top'>Компонента "Развитие"</TableCaption>
          <Tbody>
            <Tr>
              <Td width='462px'>Индекс промышленного производства, %</Td>
              <Td>0.6</Td>
              <Td isNumeric>
                <Input
                  type='number'
                  variant='outline'
                  size='md'
                  width='100px'
                  textAlign='right'
                  height={7}
                />
              </Td>
            </Tr>
            <Tr>
              <Td width='462px'>Индекс физического объема добавленной стоимости, %</Td>
              <Td>0.74</Td>
              <Td isNumeric>
                {' '}
                <Input
                  type='number'
                  variant='outline'
                  size='md'
                  width='100px'
                  textAlign='right'
                  height={7}
                />
              </Td>
            </Tr>
            <Tr>
              <Td width='462px'>Структура ВДС добыча, %</Td>
              <Td>0.81</Td>
              <Td isNumeric>
                {' '}
                <Input
                  type='number'
                  variant='outline'
                  size='md'
                  width='100px'
                  textAlign='right'
                  height={7}
                />
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th>Итог</Th>
              <Th isNumeric>0</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Container>
  );
}
