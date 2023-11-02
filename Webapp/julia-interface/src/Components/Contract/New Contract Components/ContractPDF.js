import React from "react";
import NotoSansArabic from "../../../styles/fonts/NotoSansArabic-VariableFont_wdth.ttf";
import {
  Document,
  Text,
  Page,
  PDFViewer,
  Image,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
function ContractPDF(props) {
  Font.register({
    family: "NotoSansArabic",
    fonts: [
      {
        src: NotoSansArabic,
      },
    ],
  });
  let total = props.total - props.discount;
  let compsArray = [];
  const componentCheck = () => {
    if (props.packageDetails.magazinename !== "-")
      compsArray.push(`Magazine ${props.packageDetails.magazinename}`);
    compsArray.push(`${props.packageDetails.pictures} Pictures`);
    if (props.packageDetails.albumcrystal) compsArray.push("Album Crystal");
    if (props.packageDetails.magazinemini) compsArray.push("Magazine Mini");
    if (props.packageDetails.video) compsArray.push("Video");
    if (props.packageDetails.openphotoandvideo)
      compsArray.push("Open Photo and Video");
    if (props.packageDetails.studio) compsArray.push("Studio");
    if (props.componentsSelected.length) {
      props.componentsSelected.forEach((c) => compsArray.push(c.compName));
    }
  };
  componentCheck();

  const styles = StyleSheet.create({
    page: {
      fontSize: 20,
      backgroundColor: "#fce7f3",
    },
    layout: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    section: {
      flexGrow: 1,
    },
  });
  /*const styleForNames = {
    fontFamily: "NotoSansArabic",
    alignItems: "center",
    color: "#64748b",
    marginLeft: 6,
  };*/
  return (
    <PDFViewer
      style={{
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        height: "80vh",
      }}
    >
      <Document title={`${props.brideName}`}>
        <Page size="A4" style={styles.page}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            {/*<Image
              src={""}
              alt="logo"
              width={450}
              height={200}
              style={{ height: 200, width: 200 }}
            ></Image>*/}
            <View
              style={{
                padding: 8,
                alignItems: "center",
                width: "70%",
                backgroundColor: "#f472b6",
                height: "65%",
              }}
            >
              <Text
                style={{
                  color: "white",
                  marginTop: "auto",
                  marginBottom: "auto",
                  fontSize: 60,
                }}
              >
                INVOICE
              </Text>
            </View>
          </View>
          <View
            style={{
              padding: 20,
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 6,
                }}
              >
                <Text>Second Party:</Text>
                {/*<Text style={{ ...styleForNames }}>
                  {props.secondPartyName}
                </Text>*/}
                <Text style={{ color: "#64748b", marginLeft: 6 }}>
                  {props.secondPartyName}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 6,
                }}
              >
                <Text>Civil ID:</Text>{" "}
                <Text style={{ color: "#64748b", marginLeft: 6 }}>
                  {props.civilID}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text>Contact:</Text>
                <Text
                  style={{ color: "#64748b", marginLeft: 6, marginBottom: 6 }}
                >
                  {props.phone1}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text>Location:</Text>
                {/*<Text style={{ ...styleForNames }}>{props.eventLocation}</Text>*/}
                <Text style={{ color: "#64748b", marginLeft: 6 }}>
                  {props.eventLocation}
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 6,
                }}
              >
                <Text>Contract No:</Text>
                <Text style={{ color: "#64748b", marginLeft: 6 }}>
                  {new Date().getFullYear()}00{props.id}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 6,
                }}
              >
                <Text>Date:</Text>
                <Text style={{ color: "#64748b", marginLeft: 6 }}>
                  {props.dateCreated}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text>Date of Event:</Text>
                <Text style={{ color: "#64748b", marginLeft: 6 }}>
                  {props.eventDate}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ padding: 20 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#f472b6",
                justifyContent: "space-around",
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                padding: 10,
                color: "white",
              }}
            >
              <Text>No.</Text>
              <Text>Component Name</Text>
            </View>
            <View>
              {compsArray.map((comp, ind) => {
                return (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      backgroundColor: ind % 2 === 0 ? "#cbd5e1" : "white",
                      padding: 10,
                    }}
                  >
                    <Text style={{ marginLeft: 95 }}>{ind + 1}</Text>
                    <Text style={{ marginLeft: 190 }}>{comp}</Text>
                  </View>
                );
              })}
              <View
                style={{
                  backgroundColor:
                    compsArray.length % 2 === 0 ? "#cbd5e1" : "white",
                  borderBottomLeftRadius: 6,
                  borderBottomRightRadius: 6,
                  padding: 6,
                  color: "#f472b6",
                  display: "flex",
                }}
              >
                <Text style={{ flex: 1 }}>{props.packageDetails.name}</Text>
                <Text style={{}}>{total} PLN</Text>
                <Text style={{ marginRight: 6 }}>Total:</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#f472b6",
              position: "absolute",
              bottom: 0,
              left: 0,
              padding: 4,
              fontSize: 12,
              color: "white",
              width: "100%",
            }}
          >
            <Text style={{ marginBottom: 6, textAlign: "center" }}>
              Vinland-Alley grbario St. - porati - fotelli - Shop No.99
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default ContractPDF;
