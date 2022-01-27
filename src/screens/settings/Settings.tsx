import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import List from "@mui/material/List";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
} from "@mui/material";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Link } from "react-router-dom";

const Settings = () => {
  const [flagQuestion, setFlagQuestion] = useState(false);
  const [capitalQuestion, setCapitalQuestion] = useState(false);
  const [countryQuestion, setCountryQuestion] = useState(false);
  const [flagAnswer, setFlagAnswer] = useState(false);
  const [capitalAnswer, setCapitalAnswer] = useState(false);
  const [countryAnswer, setCountryAnswer] = useState(false);

  const flagQuestionClick = (e: any) => {
    setFlagQuestion(e.target.checked);
  };
  const capitalQuestionClick = (e: any) => {
    setCapitalQuestion(e.target.checked);
  };
  const countryQuestionClick = (e: any) => {
    setCountryQuestion(e.target.checked);
  };
  const flagAnswerClick = (e: any) => {
    setFlagAnswer(e.target.checked);
  };
  const capitalAnswerClick = (e: any) => {
    setCapitalAnswer(e.target.checked);
  };
  const countryAnswerClick = (e: any) => {
    setCountryAnswer(e.target.checked);
  };
  return (
    <div className="settings">
      <Row>
        <Col md={5}>
          <h2>From:</h2>
        </Col>
        <Col md={{ span: 5, offset: 2 }}>
          <h2>To:</h2>
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <List
            sx={{ bgcolor: "background.paper", borderRadius: "15px" }}
            subheader={<ListSubheader>Questions</ListSubheader>}
          >
            <ListItem>
              <ListItemIcon>
                <EmojiFlagsIcon />
              </ListItemIcon>
              <ListItemText id="switch-question-flag" primary="Flag" />
              <Switch
                edge="end"
                checked={flagQuestion}
                onChange={(e: any) => flagQuestionClick(e)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <LocationCityIcon />
              </ListItemIcon>
              <ListItemText id="switch-question-country" primary="Country" />
              <Switch
                edge="end"
                checked={countryQuestion}
                onChange={(e: any) => countryQuestionClick(e)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText id="switch-question-capital" primary="Capital" />
              <Switch
                edge="end"
                checked={capitalQuestion}
                onChange={(e: any) => capitalQuestionClick(e)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </ListItem>
          </List>
        </Col>
        <Col md={{ span: 5, offset: 2 }}>
          <List
            sx={{ bgcolor: "background.paper", borderRadius: "15px" }}
            subheader={<ListSubheader>Answers</ListSubheader>}
          >
            <ListItem>
              <ListItemIcon>
                <EmojiFlagsIcon />
              </ListItemIcon>
              <ListItemText id="switch-question-flag" primary="Flag" />
              <Switch
                edge="end"
                disabled={flagQuestion}
                checked={flagAnswer}
                onChange={(e: any) => flagAnswerClick(e)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <LocationCityIcon />
              </ListItemIcon>
              <ListItemText id="switch-question-country" primary="Country" />
              <Switch
                edge="end"
                disabled={countryQuestion}
                checked={countryAnswer}
                onChange={(e: any) => countryAnswerClick(e)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText id="switch-question-capital" primary="Capital" />
              <Switch
                edge="end"
                disabled={capitalQuestion}
                checked={capitalAnswer}
                onChange={(e: any) => capitalAnswerClick(e)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </ListItem>
          </List>
        </Col>
      </Row>

      <Link className="btn btn-primary mt-4" to="/game">
        Start game
      </Link>
    </div>
  );
};

export default Settings;
