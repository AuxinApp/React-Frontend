import React from "react";
import "./Home.css";
import { Card, StyledBody, StyledAction, StyledThumbnail } from "baseui/card";
import podcastLogo from "../../media/nimbleIdeas.jpeg";
import { ListItem, ListItemLabel } from "baseui/list";
import { Plus } from "baseui/icon";
import { Button } from "baseui/button";
import { AreaSeries, XAxis, YAxis, XYPlot } from "react-vis";
import { useStyletron } from "baseui";

import { useHistory } from "react-router-dom";
import { H2, H3, H5, Paragraph1 } from "baseui/typography";

const Home = () => {
  const facebookBlue = "#4267B2";
  const instagramPurple = "#833AB4";
  const twitterBlue = "#1DA1F2";

  const GraphCell = ({ children }) => {
    const [css, theme] = useStyletron();
    return (
      <div className={css({ display: "flex", alignItems: "center" })}>
        <div
          className={css({
            marginRight: theme.sizing.scale600
          })}
        ></div>
        <div>
          <XYPlot
            width={200}
            height={72}
            margin={{ left: 6, right: 6, top: 6, bottom: 6 }}
          >
            <XAxis on0={true} />
            <YAxis on0={true} />

            {children}
          </XYPlot>
        </div>
      </div>
    );
  };
  const seriesPropsFB = {
    data: [
      {
        x: 0,
        y: 5
      },
      {
        x: 1,
        y: 15
      },
      {
        x: 2,
        y: 13
      },
      {
        x: 3,
        y: 20
      },
      {
        x: 4,
        y: 13
      },
      {
        x: 5,
        y: 22
      }
    ],
    opacity: 1,
    fill: "#678ab5",
    stroke: facebookBlue
  };
  const seriesPropsIG = {
    data: [
      {
        x: 0,
        y: 1
      },
      {
        x: 1,
        y: 3
      },
      {
        x: 2,
        y: 3
      },
      {
        x: 3,
        y: 7
      },
      {
        x: 4,
        y: 13
      },
      {
        x: 5,
        y: 22
      }
    ],
    opacity: 1,
    fill: "#9769b5",
    stroke: instagramPurple
  };

  const seriesPropsTwitter = {
    data: [
      {
        x: 0,
        y: 5
      },
      {
        x: 1,
        y: 15
      },
      {
        x: 2,
        y: 20
      },
      {
        x: 3,
        y: 26
      },
      {
        x: 4,
        y: 28
      },
      {
        x: 5,
        y: 35
      }
    ],
    opacity: 1,
    fill: "#99d8ff",
    stroke: twitterBlue
  };

  const history = useHistory();

  const routeChange = () => {
    let path = `/Snipping`;
    history.push(path);
  };

  return (
    <div>
      <div className="title-align">
        <H2>Hello Sharan!</H2>
      </div>
      <div className="notification-container">
        <Card
          title="Take Action!"
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                borderColor: "transparent",
                backgroundColor: $theme.colors.backgroundSecondary,
                boxShadow: $theme.lighting.shadow600,
                maxHeight: "254px"
              })
            },
            Title: {
              style: ({ $theme }) => ({
                color: $theme.colors.mono300
              })
            }
          }}
        >
          <StyledThumbnail src={podcastLogo} />
          <StyledBody>
            <Paragraph1>
              We saw that you just uploaded your latest Podcast for Nimble
              Ideas. Let's help you get the word out!
            </Paragraph1>
          </StyledBody>

          <StyledAction>
            <Button
              overrides={{
                BaseButton: {
                  style: ({ $theme }) => ({
                    width: "100%",
                    marginTop: $theme.sizing.scale600,
                    backgroundColor: "#85d6af",
                    boxShadow: $theme.lighting.shadow600,
                    ":hover": {
                      transform: "translate3d(0, -2px, 0)",
                      boxShadow: "0 8px 24px hsla(0, 0%, 0%, .65)",
                      backgroundColor: "#85d6af",
                      filter: "brightness(95%)"
                    }
                  })
                }
              }}
              onClick={routeChange}
            >
              Creator Studio
            </Button>
          </StyledAction>
        </Card>
        <Card
          title="Accounts"
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                borderColor: "transparent",
                backgroundColor: $theme.colors.backgroundSecondary,
                boxShadow: $theme.lighting.shadow600
              })
            },
            Title: {
              style: ({ $theme }) => ({
                color: $theme.colors.mono300
              })
            }
          }}
        >
          <StyledBody>
            <ListItem
              endEnhancer={() => (
                <Button size="compact" kind="secondary" shape="pill">
                  Active
                </Button>
              )}
              overrides={{
                Root: {
                  style: ({ $theme }) => ({
                    backgroundColor: $theme.colors.mono700
                  })
                },
                Content: {
                  style: ({ $theme }) => ({
                    borderBottomColor: $theme.colors.mono500
                  })
                }
              }}
            >
              <ListItemLabel>Facebook</ListItemLabel>
            </ListItem>
            <ListItem
              endEnhancer={() => (
                <Button size="compact" kind="secondary" shape="pill">
                  Active
                </Button>
              )}
              overrides={{
                Root: {
                  style: ({ $theme }) => ({
                    backgroundColor: $theme.colors.mono700
                  })
                },
                Content: {
                  style: ({ $theme }) => ({
                    borderBottomColor: $theme.colors.mono500
                  })
                }
              }}
            >
              <ListItemLabel>Instagram</ListItemLabel>
            </ListItem>
            <ListItem
              endEnhancer={() => (
                <Button size="compact" kind="secondary" shape="pill">
                  Active
                </Button>
              )}
              overrides={{
                Root: {
                  style: ({ $theme }) => ({
                    backgroundColor: $theme.colors.mono700
                  })
                },
                Content: {
                  style: ({ $theme }) => ({
                    borderBottomColor: $theme.colors.mono500
                  })
                }
              }}
            >
              <ListItemLabel>Twitter</ListItemLabel>
            </ListItem>
            <ListItem
              endEnhancer={() => (
                <Button size="compact" kind="secondary" shape="pill">
                  Active
                </Button>
              )}
              overrides={{
                Root: {
                  style: ({ $theme }) => ({
                    backgroundColor: $theme.colors.mono700
                  })
                },
                Content: {
                  style: ({ $theme }) => ({
                    borderBottomColor: $theme.colors.mono500
                  })
                }
              }}
            >
              <ListItemLabel>Linkedin</ListItemLabel>
            </ListItem>
          </StyledBody>

          <StyledAction>
            <Button
              overrides={{
                BaseButton: {
                  style: ({ $theme }) => ({
                    width: "100%",
                    marginTop: $theme.sizing.scale600,
                    backgroundColor: "#85d6af",
                    boxShadow: $theme.lighting.shadow600,
                    ":hover": {
                      transform: "translate3d(0, -2px, 0)",
                      boxShadow: "0 8px 24px hsla(0, 0%, 0%, .65)",
                      backgroundColor: "#85d6af",
                      filter: "brightness(95%)"
                    }
                  })
                }
              }}
              onClick={routeChange}
              startEnhancer={() => <Plus size={20}></Plus>}
            >
              Add Account
            </Button>
          </StyledAction>
        </Card>
      </div>

      <div className="analytics-container">
        <H3>Engagement Analytics</H3>
        <div className="graph-container">
          <Card
            overrides={{
              Root: {
                style: ({ $theme }) => ({
                  borderColor: "transparent",
                  backgroundColor: $theme.colors.backgroundSecondary,
                  boxShadow: $theme.lighting.shadow600
                })
              }
            }}
          >
            <StyledBody>
              <div className="graph-title">
                <H5 color={"#757575"} marginTop={"16px"} marginBottom={"40px"}>
                  Facebook
                </H5>
              </div>
              <GraphCell>
                <AreaSeries {...seriesPropsFB} />
              </GraphCell>
            </StyledBody>
          </Card>
          <Card
            overrides={{
              Root: {
                style: ({ $theme }) => ({
                  borderColor: "transparent",
                  backgroundColor: $theme.colors.backgroundSecondary,
                  boxShadow: $theme.lighting.shadow600
                })
              }
            }}
          >
            <StyledBody>
              <H5 color={"#757575"} marginTop={"16px"} marginBottom={"40px"}>
                Twitter
              </H5>
              <GraphCell>
                <AreaSeries {...seriesPropsTwitter} />
              </GraphCell>
            </StyledBody>
          </Card>
          <Card
            overrides={{
              Root: {
                style: ({ $theme }) => ({
                  borderColor: "transparent",
                  backgroundColor: $theme.colors.backgroundSecondary,
                  boxShadow: $theme.lighting.shadow600
                })
              }
            }}
          >
            <StyledBody>
              <H5 color={"#757575"} marginTop={"16px"} marginBottom={"40px"}>
                Instagram
              </H5>
              <GraphCell>
                <AreaSeries {...seriesPropsIG} />
              </GraphCell>
            </StyledBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
