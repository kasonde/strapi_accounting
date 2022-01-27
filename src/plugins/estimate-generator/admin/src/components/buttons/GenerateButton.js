import React from "react";
import { Button } from "@strapi/design-system/Button";
import PDFIcon from "@strapi/icons/FilePdf";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";

const GenerateButton = () => {
  const { slug, modifiedData } = useCMEditViewDataManager();

  const handleGenerate = () => {
    window.open("something", "_blank");
  };

  if (slug != "api::estimate.estimate") {
    return null;
  }
  return (
    <Button
      variant="secondary"
      startIcon={<PDFIcon />}
      onClick={handleGenerate}
    >
      Generate PDF
    </Button>
  );
};

export default GenerateButton;
