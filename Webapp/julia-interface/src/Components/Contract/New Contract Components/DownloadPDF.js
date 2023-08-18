import ReactPDF, {
  Document,
  Image,
  PDFDownloadLink,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";
//import ContractPDF from "./ContractPDF";
import juliaLogo2 from "../../../juliaLogo2.png";
import fileDownload from "js-file-download";
const MyDoc = () => {
  return (
    <PDFViewer>
      <Document>
        <Page>
          <Text>Hi there</Text>
        </Page>
      </Document>
    </PDFViewer>
  );
};
function DownloadPDF(props) {
  return (
    <div onClick={() => fileDownload("hi there", "data.pdf")}>Miss me</div>
  );
}

export default DownloadPDF;
