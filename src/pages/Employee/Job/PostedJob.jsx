import React, { useState } from "react";
import Topbar from "../../../components/Layouts/Topbar";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import {
  highlightedTitleProps,
  largeTypographyProps,
  mediumTypographyProps,
  smallTypographyProps,
} from "../../../Constants";
import Footer from "../../../components/Layouts/Footer";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Milestones from "./fragments/Milestones";
import { tokens } from "../../../theme";
import ChatModal from "./fragments/ChatModal";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import AddLinkIcon from "@mui/icons-material/AddLink";
import chapaImg from "../../../assets/chapa.jpg";
import { useNavigate } from "react-router-dom";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const initialMilestones = [
  {
    id: 1,
    title: "Milestone 1",
    tasks: [
      { id: 1, label: "Task 1", checked: false },
      { id: 2, label: "Task 2", checked: false },
    ],
  },
  {
    id: 2,
    title: "Milestone 2",
    tasks: [
      { id: 1, label: "Task 1", checked: false },
      { id: 2, label: "Task 2", checked: false },
    ],
  },
  // Add more milestones as needed
];

const PostedJobEmployee = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [milestones, setMilestones] = useState(initialMilestones);
  const [currentMilestoneIndex, setCurrentMilestoneIndex] = useState(0);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [githubLink, setGithubLink] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState("");

  const handleCheckboxChange = (milestoneId, taskId) => {
    setMilestones((prevMilestones) =>
      prevMilestones.map((milestone) =>
        milestone.id === milestoneId
          ? {
              ...milestone,
              tasks: milestone.tasks.map((task) =>
                task.id === taskId ? { ...task, checked: !task.checked } : task
              ),
            }
          : milestone
      )
    );
  };

  const handleCompleteClick = () => {
    if (currentMilestoneIndex < milestones.length - 1) {
      console.log("Current Milestone:", milestones[currentMilestoneIndex]);
      console.log(
        "Completed Tasks:",
        milestones[currentMilestoneIndex].tasks.filter((task) => task.checked)
      );
      console.log("GitHub Link:", githubLink);

      setCurrentMilestoneIndex(currentMilestoneIndex + 1);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setFileError("File size exceeds 10 MB.");
        setSelectedFile(null);
      } else {
        setFileError("");
        setSelectedFile(file);
      }
    }
  };

  const currentMilestone = milestones[currentMilestoneIndex];
  const completedTasks = currentMilestone.tasks.filter(
    (task) => task.checked
  ).length;
  const totalTasks = currentMilestone.tasks.length;

  // Function to toggle the visibility of the chat modal
  const toggleChatModal = () => {
    setIsChatModalOpen(!isChatModalOpen);
  };

  const handleChapaClick = () => {
    navigate("/payment");
  };

  return (
    <div>
      <Topbar />
      <Box m="50px">
        <Box maxWidth="1320px" mx="auto">
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Typography {...largeTypographyProps}>Job Details</Typography>
              <Typography {...highlightedTitleProps}>
                Create React Project in GitHub out of a Website Template{" "}
              </Typography>
              <Typography {...smallTypographyProps}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                fringilla tortor. Donec eu diam ut velit auctor ultrices. Mauris
                in augue pellentesque mauris dignissim hendrerit at in purus.
                Praesent nisi sem, vehicula quis mi non, interdum iaculis mi.
                Sed sit amet dui fermentum, blandit felis sit amet, laoreet
                lorem. Proin eget quam nulla. Nam pharetra gravida magna sit
                amet pharetra. Ut porttitor, augue vel maximus blandit, orci
                magna tempor lorem, sed elementum leo justo et quam. Praesent eu
                varius ex. Maecenas cursus volutpat nibh vel efficitur. Ut id
                erat malesuada, lacinia lectus quis, ornare diam.
              </Typography>
            </Grid>
            <Grid item xs={12} md={1}>
              <Divider
                orientation="vertical"
                style={{
                  width: "1px",
                  backgroundColor: "black",
                  margin: "auto",
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Box marginLeft={7}>
                <Button
                  style={{
                    display: "flex",
                    width: "216px",
                    padding: "16px 24px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "6px",
                    background: "var(--WF-Base-800, #2D3648)",
                  }}
                >
                  <Typography color={"white"}>OnGoing</Typography>
                </Button>
                <Box marginTop={2}></Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={5}>
                    {/* <svg
                      width="200"
                      height="200"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="grad1"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            style={{ stopColor: "#8DF25D", stopOpacity: 1 }}
                          />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#22C9A3", stopOpacity: 1 }}
                          />
                        </linearGradient>
                      </defs>
                      <g fill="url(#grad1)">
                        <path d="M100 40c16 0 30 6 40 16l-16 16c-6-6-14-10-24-10-10 0-20 4-26 10-6 6-10 16-10 26 0 10 4 20 10 26 6 6 16 10 26 10 10 0 18-4 24-10l16 16c-10 10-24 16-40 16-32 0-60-28-60-60s28-60 60-60z" />
                        <path d="M140 100c10 0 20 4 26 10 6 6 10 16 10 26 0 10-4 20-10 26-6 6-16 10-26 10s-20-4-26-10c-6-6-10-16-10-26 0-10 4-20 10-26 6-6 16-10 26-10z" />
                      </g>
                      <text
                        x="50"
                        y="180"
                        font-family="Arial"
                        font-size="60"
                        fill="url(#grad1)"
                      >
                        Chapa
                      </text>
                    </svg> */}
                    <img
                      src={chapaImg}
                      alt="Logo"
                      onClick={handleChapaClick}
                      style={{
                        borderRadius: "50%",
                        maxWidth: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Typography {...largeTypographyProps}>$ 150</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Divider
            orientation="horizontal"
            style={{ height: "1px", backgroundColor: "black", marginTop: 10 }}
          />
        </Box>
        <Box marginTop={5}>
          <Milestones
            milestones={milestones}
            currentMilestoneIndex={currentMilestoneIndex}
            handleCheckboxChange={handleCheckboxChange}
          />
        </Box>

        <Box marginTop={3}>
          <Typography {...mediumTypographyProps}>Github Link</Typography>
          <FormControl variant="standard" fullWidth>
            <Input
              name="githubLink"
              fullWidth
              id="input-with-icon-adornment"
              onChange={(e) => setGithubLink(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <AddLinkIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <Typography {...mediumTypographyProps}>Upload file</Typography>
          <input
            type="file"
            accept=".zip,.rar,.7z,.tar"
            onChange={handleFileChange}
          />
          {fileError && <Typography color="error">{fileError}</Typography>}
        </Box>
        <Box margin={5}>
          <Divider />
        </Box>
        <Box margin={2} borderRadius={4}>
          <TextField
            disabled
            fullWidth
            id="outlined-multiline-static"
            label="Previous comment ..."
            multiline
            rows={5}
            sx={{
              backgroundColor: colors.blueAccent[800],
              borderRadius: "8px",
            }}
          />
        </Box>
        <Box display="flex" justifyContent="right" marginTop={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCompleteClick}
            disabled={
              completedTasks < totalTasks || githubLink === "" || !selectedFile
            }
          >
            Complete Milestone
          </Button>
        </Box>
        <Box
          position="fixed"
          bottom={20}
          right={20}
          sx={{ background: colors.blueAccent[800], borderRadius: "80px" }}
        >
          <IconButton
            variant="contained"
            color="primary"
            onClick={toggleChatModal}
          >
            <ChatBubbleIcon />
          </IconButton>
        </Box>
      </Box>
      <ChatModal open={isChatModalOpen} onClose={toggleChatModal} />
      <Footer />
    </div>
  );
};

export default PostedJobEmployee;
