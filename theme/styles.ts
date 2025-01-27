export default {
    global: {
        ":root": {
            "--accent-color": "#00e6cb",
            "--color-body": "#182029",
            "--color-details": "#b690ff",
            "--color-three": "#485b73",
            "--border": "1px dashed",
            "--font-weight-four-medium": "500",
            "--color-font-two": "#182029"
        },
        ".global-underline": {
            paddingBottom: ".2%",
            transition: "background-size .6s ease-out",
            background: "linear-gradient(var(--accent-color), var(--accent-color)) no-repeat left 123%/0 40%"
        },
        ".global-underline:hover": {
            backgroundSize: "97% 40%"
        },
        ".global-special": {
            base: {
                margin: "10vh auto 25px",
                paddingTop: "20px",
                borderTop: "4px solid var(--color-details)",
                flexGrow: 1,
            },
            md: {
                marginTop: "5vh"
            },
            lg: {
                maxW: "100%"
            },
            "& h2": {
                fontFamily: "four",
                fontSize: "13px",
                lineHeight: "1.4",
                position: "absolute",
                zIndex: 1,
                top: 0,
                left: 0,
                display: "inline-block",
                margin: 0,
                transform: "translateY(-100%)",
                letterSpacing: "0",
                fontWeight: "var(--font-weight-four-medium)",
                color: "var(--color-font-two)"
            },
            "& h2 span": {
                background: "var(--color-details)"
            },
            "& h3": {
                fontSize: "20px",
                marginTop: 0,
                marginBottom: "1vh"
            },
            "& article": {
                boxSizing: "border-box",
                padding: "10px 25px",
                flex: "1 0 25%",
                position: "relative"
            },
            "& article:first-of-type:last-of-type": {
                borderLeft: "none"
            },
            "& article:not(:first-of-type):not(:last-of-type), & article:last-of-type": {
                borderLeft: 'var(--border) var(--color-three)'
            }
        },
        ".global-meta, .global-tags": {
            fontFamily: "four",
            fontSize: "13px",
            position: "relative",
            zIndex: 1,
            width: "100%"
        },
        ".global-tags": {
            "& a": {
                display: "inline-block",
                margin: "10px 1.5% 0 0"
            }
        },
        ".global-members-label": {
            fontFamily: "four",
            fontSize: "13px",
            lineHeight: "1.4",
            position: "absolute",
            top: "-30px",
            left: "-1px",
            color: "black",
            background: "var(--color-details)",
            textTransform: "capitalize"
        },
        ".global-image": {
            lineHeight: 0,
            position: "relative",
            zIndex: 1,
            float: "right",
            width: "125px",
            height: "125px",
            marginLeft: "7%",
            marginBottom: "15px",
            "&::after": {
                background: "orange"
            },
            ".is-hero &": {
                right: "40px",
                float: "none",
                flex: "0 0 350px",
                order: 2,
                width: "350px",
                height: "100%",
                margin: 0
            }
        },
        ".is-hero": {
            ".item&": {
                maxW: "100%",
                marginTop: "10vh",
                padding: "50px 0",
                flexBasis: "100%"
            }
        },
        ".item": {
            maxW: "50%",
            marginTop: "12vh",
            paddingTop: "0",
            paddingBottom: "0",
            flexBasis: "100%"
        },
        ".item-excerpt": {
            base: {
                fontFamily: "two",
                fontSize: "13px",
                lineHeight: "1.6",
                width: "95%",
                maxW: "400px",
                marginTop: "0",
                marginBottom: "0",
                padding: "5px 0 10px"
            },
            lg: {
                maxW: "500px",
                paddingTop: "10px",
                paddingBottom: "3vh"
            },
            xl: {
                lineHeight: 1.7,
                columnCount: "1"
            }
        },
        ".loop-wrap": {
            marginBottom: "5vh",
            flexWrap: "wrap"
        },
        ".item-image": {
            base: {
                lineHeight: "0",
                position: "relative",
                zIndex: "1",
                float: "right",
                width: "125px",
                height: "125px",
                marginBottom: "15px",
                marginLeft: "7%",
                ".item.is-hero &": {
                    top: "0",
                    float: "none",
                    width: "350px",
                    height: "100%",
                    margin: "0",
                    order: "2",
                    flex: "0 0 350px"
                }
            },
            md: {
                ".item.is-hero &": {
                    width: "290px",
                    flexBasis: "290px"
                }
            },
            lg: {
                width: "95px",
                height: "95px",
                marginTop: "6px",
                ".item.is-hero &": {
                    right: "0"
                }
            },
            xl: {
                right: "0"
            }
        },
        ".item-container": {
            base: {
                boxSizing: "border-box",
                maxW: "100%",
                position: "relative"
            },
            md: {
                ".post-header.is-hero.is-image": {
                    minHeight: "45vh"
                }
            },
            sm: {
                ".post-header.is-hero &": {
                    alignItems: "center"
                }
            }
        },
        ".global-footer": {
            width: "100%",
            maxW: "1200px",
            marginRight: "auto",
            marginLeft: "auto",
            flexShrink: "0"
        },
        ".footer-section": {
            paddingTop: "7vh",
            paddingBottom: "6vh",
            borderTop: "1px dashed #485b73"
        },
        ".footer-wrap": {
            width: "100%",
            margin: "0 auto",
            alignItems: "flex-start",
            boxSizing: "border-box"
        },
        ".footer-data": {
            boxSizing: "border-box",
            paddingRight: "5%",
            flex: "999 0 30%"
        },
        ".footer-logo": {
            marginBottom: "15px",
            maxWidth: "350px",
            "& .is-image img": {
                maxW: "150px",
                maxH: "45px"
            }
        },
        ".post-share-section": {
            "& a": {
                display: "flex",
                width: "85px",
                height: "64px",
                pointerEvents: "none",
                border: 0,
                justifyContent: "center",
                alignItems: "center"
            },
            "& a:first-of-type": {
                paddingLeft: "10px",
                borderLeft: "var(--border) var(--color-three)"
            },
            "& a:last-of-type": {
                paddingRight: "10px",
                borderRight: "var(--border) var(--color-three)"
            }
        },
        ".footer-description": {
            margin: "0",
            maxW: "350px",
            fontFamily: "four",
            fontSize: "13px"
        },
        body: {
            bg: "#182029",
            lineHeight: "1.5",
            wordWrap: "break-word",
            wordBreak: "break-word",
            fontSize: "19px",
            color: "#f7f9f9"
        },
        hr: {
            marginTop: "6vmin",
            width: "100%",
            position: "relative",
            margin: "2.5em 0 3.5em",
            padding: "0",
            height: "1px",
            border: "0",
            borderTop: "1px solid #f0f0f0"
        },
        p: {
            fontSize: "19px",
            fontWeight: "400",
            lineHeight: "1.75",
            position: "relative",
            fontFamily: "three",
            marginRight: "0",
            marginLeft: "0",
            marginBottom: "40px",
            "&::first-child": {
                marginTop: "0"
            }
        },
        blockquote: {
            fontSize: "30px",
            position: "relative",
            width: "100%",
            paddingLeft: "55px",
            lineHeight: "1.5",
            boxSizing: "border-box",
            fontFamily: "two",
            my: "75px",
            "&::before": {
                fontFamily: "two",
                position: "absolute",
                content: "'\"'",
            }
        },
        ul: {
            paddingLeft: "15px",
            listStyle: "disc outside",
            marginRight: "0",
            marginLeft: "15px",
            marginBottom: "40px",
            marginTop: "0"
        },
        li: {
            marginBottom: "10px"
        },
        "h1,h2,h3,h4,h5,h6": {
            fontFamily: "one",
        },
        h1: {
            fontSize: "55px",
            marginTop: "60px"
        },
        h2: {
            fontSize: "41px",
            marginTop: "55px",
            lineHeight: "1.4",
            marginBottom: "20px",
            marginLeft: "-1px"
        },
        h3: {
            fontSize: "31px",
            marginTop: "45px"
        },
        h4: {
            fontSize: "24px",
            marginTop: "40px"
        },
        h5: {
            fontSize: "20px",
            marginTop: "40px"
        },
        h6: {
            fontSize: "11px",
            marginTop: "45px",
            letterSpacing: "2px",
            textTransform: "uppercase"
        }
    }
}