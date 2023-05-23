import React from "react";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
function SeperateComponents() {
  const [title, setTitle] = useState("None");
  const [titleVid, setTitleVid] = useState("None");
  const [titleFrane, setTitleFrame] = useState("None");
  return (
    <div className="space-y-4">
      <div className="flex justify-evenly">
        <div className="space-y-1">
          <div className="text-black font-medium">Select Magazine</div>
          <DropdownButton id="dropdown-basic-button" title={title}>
            <Dropdown.Item onClick={() => setTitle("None")}>None</Dropdown.Item>
            <Dropdown.Item onClick={() => setTitle("Magazine 20x30 - 250 KD")}>
              Magazine 20x30 - 250 KD
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setTitle("Magazine 30x30 - 300 KD")}>
              Magazine 30x30 - 300 KD
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setTitle("Magazine Ipad - 50 KD")}>
              Magazine Ipad - 50 KD
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setTitle("Magazine Mini - 100 KD")}>
              Magazine Mini - 100 KD
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="space-y-1">
          <div className="text-black font-medium">Select Frame</div>
          <DropdownButton id="dropdown-basic-button" title={titleVid}>
            <Dropdown.Item onClick={() => setTitleVid("None")}>
              None
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setTitleVid("Magazine 20x30 - 250 KD")}
            >
              Magazine 20x30 - 250 KD
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setTitleVid("Magazine 30x30 - 300 KD")}
            >
              Magazine 30x30 - 300 KD
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setTitleVid("Magazine Ipad - 50 KD")}>
              Magazine Ipad - 50 KD
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setTitleVid("Magazine Mini - 100 KD")}
            >
              Magazine Mini - 100 KD
            </Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="space-y-1">
          <div className="text-black font-medium">Select Video</div>
          <DropdownButton id="dropdown-basic-button" title={titleFrane}>
            <Dropdown.Item onClick={() => setTitleFrame("None")}>
              None
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setTitleFrame("Frame 50x70 - 50 KD")}>
              Frame 50x70 - 50 KD
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setTitleFrame("Frame 30x40 - 25 KD")}>
              Frame 30x40 - 25 KD
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className="space-y-2">
        <Form.Check id={`0`} className="font-medium" label={`Album Crystal`} />
        <Form.Check
          id={`1`}
          className="font-medium"
          label={`Usb Photo - 50 KD`}
        />
        <Form.Check id={`2`} className="font-medium" label={`Promo - 80 KD`} />
      </div>
    </div>
  );
}

export default SeperateComponents;
