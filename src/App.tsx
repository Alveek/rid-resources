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
      setResults(result);
      setPeriodData((prev: PeriodData[]) => [...prev, { currentYear, result }]);
      getResultsText(result);
    }
    return 0;
  };

  const getResultsText = (value: number): string => {
    const prevRes = periodData.at(-1)?.result || 1;
    if (value >= 1 && periodData.length === 0) {
      setMessage(
        'Ресурсы и производственный потенциал предприятия используются эффективно'
      );
      setColor('green');
    } else if (value < 1 && periodData.length === 0) {
      setMessage(
        'Ресурсы и производственный потенциал предприятия используются неэффективно, необходима корректировка производственной политики'
      );
      setColor('red');
    } else if (value > prevRes) {
      setMessage(
        `Эффект от отдачи ресурсов составляет ${value}. Рост показателя говорит о повышении эффективности используемых ресурсов`
      );
      setColor('green');
    } else if (value < prevRes) {
      setMessage(
        `Эффект от отдачи ресурсов составляет ${value}. Снижение показателя говорит об уменьшении эффективности используемых ресурсов`
      );
      setColor('red');
    } else if (value === prevRes) {
      setMessage(`Эффект от отдачи ресурсов остался прежним ${value}.`);
      setColor('black');
    }
    return '';
  };

  const reset = (): void => {
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
    setResults(0);
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
        Расчет эффективности использования ресурсов предприятия
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
