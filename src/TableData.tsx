import React, { ReactElement, Dispatch, SetStateAction } from 'react';

import {
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
} from '@chakra-ui/react';

interface Props {
  setProductsOutput: Dispatch<SetStateAction<number>>;
  setIndustrialProd: Dispatch<SetStateAction<number>>;
  setInvestInCapital: Dispatch<SetStateAction<number>>;
  setPhysValueAdded: Dispatch<SetStateAction<number>>;
  setRdCostsOutput: Dispatch<SetStateAction<number>>;
  setValPerPerson: Dispatch<SetStateAction<number>>;
  setStructProd: Dispatch<SetStateAction<number>>;
  productsOutput: number;
  rdCostsOutput: number;
  valPerPerson: number;
  investInCapital: number;
  industrialProd: number;
  physValueAdded: number;
  structProd: number;
  currentYear: number;
  devTotal: number;
  resTotal: number;
  color: string;
  results: number;
}

const TableData = ({
  setProductsOutput,
  setIndustrialProd,
  setInvestInCapital,
  setPhysValueAdded,
  setRdCostsOutput,
  setValPerPerson,
  setStructProd,
  productsOutput,
  rdCostsOutput,
  valPerPerson,
  investInCapital,
  industrialProd,
  physValueAdded,
  structProd,
  currentYear,
  devTotal,
  resTotal,
  color,
  results,
}: Props): ReactElement => {
  return (
    <>
      <TableContainer>
        <Table colorScheme="blue" size="sm">
          <TableCaption placement="top" fontSize={18}>
            Компонента "Ресурсы"
          </TableCaption>
          <Thead>
            <Tr>
              <Th color="black">Показатель</Th>
              <Th color="black" textAlign="center">
                Значение ({currentYear})
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
                  value={productsOutput || ''}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setProductsOutput(Number(e.target.value));
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
                  value={rdCostsOutput || ''}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRdCostsOutput(Number(e.target.value))
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
                  value={valPerPerson || ''}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValPerPerson(Number(e.target.value))
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
                  value={investInCapital || ''}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInvestInCapital(Number(e.target.value))
                  }
                />
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th color="black">Итог</Th>
              <Th pr={8} py={3} isNumeric>
                {resTotal}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <TableContainer maxW="780px" mb={10}>
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
                  value={industrialProd || ''}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setIndustrialProd(Number(e.target.value))
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
                  value={physValueAdded || ''}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPhysValueAdded(Number(e.target.value))
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
                  value={structProd || ''}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setStructProd(Number(e.target.value))
                  }
                />
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th color="black">Итог</Th>
              <Th pr={8} py={3} isNumeric>
                {devTotal}
              </Th>
            </Tr>
            <Tr>
              <Th color="black">Соотношение Развитие / Ресурсы</Th>
              <Th pr={8} py={3} color={results > 0 ? color : ''} isNumeric>
                {results.toFixed(1)}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableData;
