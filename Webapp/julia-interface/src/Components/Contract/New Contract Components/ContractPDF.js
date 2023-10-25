import React from "react";
import juliaLogo2 from "../../../juliaLogo2.png";
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
  let compsArray = [
    `Magazine ${props.packageDetails.magazinename}`,
    `${props.packageDetails.pictures} Pictures`,
  ];

  if (props.componentsSelected.length) {
    props.componentsSelected.forEach((c) => compsArray.push(c.compName));
  }

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
  const styleForNames = {
    fontFamily: "NotoSansArabic",
    alignItems: "center",
    color: "#64748b",
    marginLeft: 6,
  };
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
            <Image
              src={juliaLogo2}
              alt="logo"
              width={450}
              height={200}
              style={{ height: 200, width: 200 }}
            ></Image>
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
                عقد اتفاق
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
                <Text>:الطرف الثاني</Text>
                <Text style={{ ...styleForNames }}>
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
                <Text>رقم البطاقه المدنيه:</Text>{" "}
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
                <Text>:نقال</Text>
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
                <Text>عنوان الحفله:</Text>
                <Text style={{ ...styleForNames }}>{props.eventLocation}</Text>
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
                <Text>رقم العقد:</Text>
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
                <Text>:تاريخ العقد</Text>
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
                <Text>تاريخ الحفله:</Text>
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
              })}{" "}
              <View
                style={{
                  backgroundColor:
                    compsArray.length % 2 === 0 ? "#cbd5e1" : "white",
                  borderBottomLeftRadius: 6,
                  borderBottomRightRadius: 6,
                  padding: 6,
                  color: "#f472b6",
                  display: "flex",
                  flexDirection: "row-reverse",
                }}
              >
                <Text style={{}}>{total} KD</Text>
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
              Salimya-Salem Al Mubarak St. - 8Mall Com - Mezanian - Shop No.33
            </Text>
            <Text style={{ textAlign: "center" }}>
              +965 65540004 | +965 97364487 | Instagram: julia_studio9 |
              Snapchat: juliastudione19
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default ContractPDF;
