import { useEffect, useState } from 'react';
import { Container, Heading, Box, Button, Text } from '@chakra-ui/react';
import TableData from './TableData';
import Chart from './Chart';

export default function App() {
  interface PeriodData {
    currentYear: number;
    result: number;
  }

  const [resTotal, setResTotal] = useState(0);
  const [devTotal, setDevTotal] = useState(0);
  const [results, setResults] = useState(0);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');
  const [productsOutput, setProductsOutput] = useState(0);
  const [rdCostsOutput, setRdCostsOutput] = useState(0);
  const [valPerPerson, setValPerPerson] = useState(0);
  const [investInCapital, setInvestInCapital] = useState(0);
  const [industrialProd, setIndustrialProd] = useState(0);
  const [physValueAdded, setPhysValueAdded] = useState(0);
  const [structProd, setStructProd] = useState(0);
  const [periodData, setPeriodData] = useState<PeriodData[]>([]);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const getResourcesTotal = (): number => {
    let result = 0;
    if (productsOutput && rdCostsOutput && valPerPerson && investInCapital) {
      result = parseFloat(
        (
          0.87 * productsOutput +
          0.53 * rdCostsOutput +
          0.69 * valPerPerson +
          0.53 * investInCapital
        ).toFixed(1)
      );
      return result;
    }
    return 0;
  };

  const getDevelopmentTotal = (): number => {
    let result = 0;
    if (industrialProd && physValueAdded && structProd) {
      result = parseFloat(
        (
          0.6 * industrialProd +
          0.74 * physValueAdded +
          0.81 * structProd
        ).toFixed(1)
      );
      return result;
    }
    return 0;
  };

  const getDiff = (): number => {
    let result = 0;
    if (resTotal && devTotal) {
      result = parseFloat((devTotal / resTotal).toFixed(1));
      getResultsText(result);
      setResults(result);
      setPeriodData((prev: PeriodData[]) => [...prev, { currentYear, result }]);
    }
    return 0;
  };

  const getResultsText = (value: number): string => {
    if (value >= 1) {
      setMessage(
        'Ресурсы и производственный потенциал предприятия используются эффективно'
      );
      setColor('green');
    } else if (value < 1) {
      setMessage(
        'Ресурсы и производственный потенциал предприятия используются неэффективно, необходима корректировка производственной политики'
      );
      setColor('red');
    }
    return '';
  };

  const reset = (): void => {
    // document.querySelectorAll('input').forEach((input: HTMLInputElement) => {
    //   input.valueAsNumber = 0;
    // });
    // setResTotal(0);
    // setDevTotal(0);
    setResults(0);
    setProductsOutput(0);
    setRdCostsOutput(0);
    setValPerPerson(0);
    setInvestInCapital(0);
    setIndustrialProd(0);
    setPhysValueAdded(0);
    setStructProd(0);
    setCurrentYear(currentYear + 1);

    setResTotal(getResourcesTotal);
    setDevTotal(getDevelopmentTotal);
  };

  useEffect(() => {
    setResTotal(getResourcesTotal);
    setDevTotal(getDevelopmentTotal);
    // getDiff();
    setResults(0);
  }, [
    productsOutput,
    rdCostsOutput,
    valPerPerson,
    investInCapital,
    industrialProd,
    physValueAdded,
    structProd,
  ]);

  return (
    <Container
      maxW="container.md"
      display="flex"
      flexDirection="column"
      my={10}
    >
      <Heading as="h1" size="lg" textAlign="center">
        Пояснение РИД Развитие и Ресурсы
      </Heading>
      <TableData
        setIndustrialProd={setIndustrialProd}
        setInvestInCapital={setInvestInCapital}
        setPhysValueAdded={setPhysValueAdded}
        setProductsOutput={setProductsOutput}
        setRdCostsOutput={setRdCostsOutput}
        setStructProd={setStructProd}
        setValPerPerson={setValPerPerson}
        productsOutput={productsOutput}
        rdCostsOutput={rdCostsOutput}
        valPerPerson={valPerPerson}
        investInCapital={investInCapital}
        industrialProd={industrialProd}
        physValueAdded={physValueAdded}
        structProd={structProd}
        currentYear={currentYear}
        color={color}
        devTotal={devTotal}
        resTotal={resTotal}
        results={results}
      />
      {results === 0 && (
        <Button
          colorScheme="green"
          alignSelf="end"
          isDisabled={resTotal === 0 || devTotal === 0}
          onClick={() => {
            getDiff();
          }}
        >
          Рассчитать
        </Button>
      )}

      {results > 0 && (
        <Button
          colorScheme="blue"
          alignSelf="end"
          onClick={() => {
            reset();
          }}
        >
          Рассчитать новый период
        </Button>
      )}

      {results > 0 && (
        <Box>
          <Heading textAlign="center" mb={5} as="h3" fontSize={28}>
            Выводы
          </Heading>
          <Text fontSize={16}>{message}</Text>
        </Box>
      )}

      <Box alignSelf="center" mt={10}>
        <Chart data={periodData} />
      </Box>
    </Container>
  );
}
