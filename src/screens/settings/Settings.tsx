import React, { useEffect, useState } from "react";
import { GameCategory, IGameSettings } from "../../redux/data_types";
import "./Settings.scss";
import { Col, Row } from "react-bootstrap";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PublicIcon from "@mui/icons-material/Public";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setACategory,
  setNumQuestions,
  setQCategory,
} from "../../redux/gameSlice";
const Settings = () => {
  const dispatch = useDispatch();

  const [qSettings, setQSettings] = useState<IGameSettings>({
    flag: false,
    country: false,
    capital: false,
    region: false,
    subregion: false,
  });
  const [aSettings, setASettings] = useState<IGameSettings>({
    flag: false,
    country: false,
    capital: false,
    region: false,
    subregion: false,
  });
  const [nQuestions, setNQuestions] = useState("10");
  const numQuestionsClick = (
    e: React.MouseEvent<HTMLElement>,
    newNum: string
  ) => {
    setNQuestions(newNum);
    //dispatch(setNumQuestions(newNum));
  };

  const handleBtnClick = () => {
    dispatch(setNumQuestions(Number(nQuestions)));
    let tmp: keyof typeof qSettings;
    for (tmp in qSettings) {
      if (qSettings[tmp] === true) {
        dispatch(setQCategory(GameCategory[tmp]));
      }
    }
    let tmp1: keyof typeof aSettings;
    for (tmp1 in aSettings) {
      if (aSettings[tmp1] === true) {
        dispatch(setACategory(GameCategory[tmp1]));
      }
    }
  };
  enum SettingType {
    Question,
    Answer,
  }
  const [flag, setFlag] = useState(false);
  const toggleSetting = (
    settingName: keyof IGameSettings,
    type: SettingType = SettingType.Question
  ) => {
    if (type === SettingType.Question) {
      let tmp = { ...qSettings };
      tmp[settingName] = !tmp[settingName];
      // setFlag(true);
      setQSettings(tmp);
    } else {
      let tmp = { ...aSettings };
      tmp[settingName] = !tmp[settingName];
      setASettings(tmp);
    }
  };

  return (
    <div className="settings">
      <h1>Settings</h1>
      <p>Select one form of questions and one form answers</p>
      {/*<h3>answers</h3>
      <p>{JSON.stringify(aSettings)}</p> */}
      <Row>
        <Col md={5}>
          <h3>From:</h3>
        </Col>
        <Col md={{ span: 5, offset: 2 }}>
          <h3>To:</h3>
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
                disabled={flag}
                checked={qSettings["flag"]}
                onChange={() => toggleSetting("flag", SettingType.Question)}
                inputProps={{ "aria-label": "flag" }}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <LocationCityIcon />
              </ListItemIcon>
              <ListItemText id="switch-question-country" primary="Country" />
              <Switch
                edge="end"
                disabled={flag}
                checked={qSettings["country"]}
                onChange={() => toggleSetting("country", SettingType.Question)}
                inputProps={{ "aria-label": "country" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText id="switch-question-capital" primary="Capital" />
              <Switch
                edge="end"
                disabled={flag}
                checked={qSettings["capital"]}
                onChange={() => toggleSetting("capital", SettingType.Question)}
                inputProps={{ "aria-label": "capital" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText id="switch-question-capital" primary="Region" />
              <Switch
                edge="end"
                disabled={flag}
                checked={qSettings["region"]}
                onChange={() => toggleSetting("region", SettingType.Question)}
                inputProps={{ "aria-label": "region" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TravelExploreIcon />
              </ListItemIcon>
              <ListItemText id="switch-question-capital" primary="Sub Region" />
              <Switch
                edge="end"
                disabled={flag}
                checked={qSettings["subregion"]}
                onChange={() =>
                  toggleSetting("subregion", SettingType.Question)
                }
                inputProps={{ "aria-label": "subregion" }}
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
                disabled={qSettings["flag"]}
                checked={aSettings["flag"]}
                onChange={() => toggleSetting("flag", SettingType.Answer)}
                inputProps={{ "aria-label": "flag" }}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <LocationCityIcon />
              </ListItemIcon>
              <ListItemText id="switch-question-country" primary="Country" />
              <Switch
                edge="end"
                disabled={qSettings["country"]}
                checked={aSettings["country"]}
                onChange={() => toggleSetting("country", SettingType.Answer)}
                inputProps={{ "aria-label": "country" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText id="switch-question-capital" primary="Capital" />
              <Switch
                edge="end"
                disabled={qSettings["capital"]}
                checked={aSettings["capital"]}
                onChange={() => toggleSetting("capital", SettingType.Answer)}
                inputProps={{ "aria-label": "capital" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText id="switch-question-capital" primary="Region" />
              <Switch
                edge="end"
                checked={aSettings["region"]}
                disabled={qSettings["region"]}
                onChange={() => toggleSetting("region", SettingType.Answer)}
                inputProps={{ "aria-label": "region" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TravelExploreIcon />
              </ListItemIcon>
              <ListItemText id="switch-question-capital" primary="Sub Region" />
              <Switch
                edge="end"
                checked={aSettings["subregion"]}
                disabled={qSettings["subregion"]}
                onChange={() => toggleSetting("subregion", SettingType.Answer)}
                inputProps={{ "aria-label": "subregion" }}
              />
            </ListItem>
          </List>
        </Col>
      </Row>
      <h3 className="mt-3">Number of Questions:</h3>
      <Row className="ps-2">
        <Col md={{ span: 3 }}>
          <ToggleButtonGroup
            sx={{ bgcolor: "background.paper", width: "auto" }}
            value={nQuestions}
            exclusive
            onChange={numQuestionsClick}
            aria-label="question number"
          >
            <ToggleButton value="10" aria-label="quest-20">
              10
            </ToggleButton>
            <ToggleButton value="20" aria-label="quest-20">
              20
            </ToggleButton>
            <ToggleButton value="30" aria-label="quest-20">
              30
            </ToggleButton>
            <ToggleButton value="50" aria-label="quest-20">
              50
            </ToggleButton>
            <ToggleButton value="100" aria-label="quest-20">
              100
            </ToggleButton>
          </ToggleButtonGroup>
        </Col>
        <Col md={{ offset: 3, span: 3 }}>
          <Link onClick={handleBtnClick} className="btn btn-primary" to="/game">
            Start Game
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Settings;
