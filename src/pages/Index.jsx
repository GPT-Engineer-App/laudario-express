import React, { useState } from "react";
import { Box, Heading, Text, Flex, Checkbox, Textarea, Button, useToast } from "@chakra-ui/react";
import { FaSearch, FaDownload } from "react-icons/fa";

const findings = {
  "Cabeça e Pescoço": [
    { id: 1, text: "Sem achados significativos na cabeça e pescoço." },
    { id: 2, text: "Evidência de lesão expansiva na cabeça." },
  ],
  Tórax: [
    { id: 3, text: "Sem achados significativos no tórax." },
    { id: 4, text: "Opacidade pulmonar sugestiva de pneumonia." },
  ],
  Abdome: [
    { id: 5, text: "Sem achados significativos no abdome." },
    { id: 6, text: "Hepatomegalia com esteatose hepática." },
  ],
};

const Index = () => {
  const [selectedFindings, setSelectedFindings] = useState([]);
  const [report, setReport] = useState("");
  const toast = useToast();

  const handleFindingToggle = (finding) => {
    const index = selectedFindings.findIndex((f) => f.id === finding.id);
    if (index > -1) {
      const newFindings = [...selectedFindings];
      newFindings.splice(index, 1);
      setSelectedFindings(newFindings);
    } else {
      setSelectedFindings([...selectedFindings, finding]);
    }
  };

  const generateReport = () => {
    const reportText = selectedFindings.map((f) => f.text).join(" ");
    setReport(reportText);
    toast({
      title: "Laudo gerado.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <Heading as="h1" mb={8}>
        Laudário
      </Heading>
      <Flex>
        <Box flex={1} mr={8}>
          {Object.entries(findings).map(([category, categoryFindings]) => (
            <Box key={category} mb={8}>
              <Heading as="h2" size="md" mb={2}>
                {category}
              </Heading>
              {categoryFindings.map((finding) => (
                <Checkbox key={finding.id} isChecked={selectedFindings.some((f) => f.id === finding.id)} onChange={() => handleFindingToggle(finding)} mb={2}>
                  <Text>{finding.text}</Text>
                </Checkbox>
              ))}
            </Box>
          ))}
          <Button leftIcon={<FaSearch />} colorScheme="blue" mr={4}>
            Buscar Laudos
          </Button>
          <Button leftIcon={<FaDownload />} colorScheme="green" onClick={generateReport}>
            Gerar Laudo
          </Button>
        </Box>
        <Box flex={1}>
          <Heading as="h2" size="md" mb={2}>
            Pré-visualização do Laudo
          </Heading>
          <Textarea value={report} onChange={(e) => setReport(e.target.value)} rows={10} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
