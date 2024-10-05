import React from "react";
import "normalize.css";
import StyledContainer from "./styled/common/StyledContainer";
import StyledFlex from "./styled/common/StyledFlex";
import StyledRWD from "./styled/common/StyledRWD";

import product001 from "./images/products/product001.jpg";
import product002 from "./images/products/product002.jpg";
import product003 from "./images/products/product003.jpg";
import product005 from "./images/products/product005.jpg";
import product006 from "./images/products/product006.jpg";
import product007 from "./images/products/product007.jpg";
import product008 from "./images/products/product008.jpg";

import {
  StyledNavBar,
  StyledLogo,
  StyledNavBarLink,
  StyledMenu,
  StyledOpenLine,
  StyledClose,
} from "./styled/StyledNavBar";
import { StyledJumbotron, StyledJumbotronLogo } from "./styled/StyledJumbotron";
import { StyledBtn, StyledBtnSecond } from "./styled/common/StyledButton";
import {
  StyledFullScreenContainer,
  StyledFullScreenMenu,
} from "./styled/StyledFullScreenMenu";
import { HashRouter } from "react-router-dom";
import {
  StyledAbout,
  StyledImageContainer,
  StyledImg,
  StyledTextContainer,
} from "./styled/StyledAbout";
import StyledHashLink from "./styled/common/StyledHashLink";
import {
  StyledInfo,
  StyledInfoH5,
  StyledInfoText,
  StyledInfoTitle,
  StyledItem,
  StyledProdcut,
  StyledServices,
} from "./styled/StyledServices";
import { StyledReservation } from "./styled/StyledReservation";
import StyledDark from "./styled/common/StyledDark";
import StyledTitle from "./styled/common/StyledTitle";
import StyledText from "./styled/common/StyledText";
import {
  StyledMenuContainer,
  StyledMenuItem,
  StyledMenuItemText,
  StyledMenuItemTitle,
  StyledMenuList,
  StyledMenuProduct,
  StyledMenuTitle,
} from "./styled/StyledMenuContainer";
import {
  StyledContact,
  StyledContactInfo,
  StyledContactMap,
  StyledContactText,
  StyledContactTitle,
  StyledMap,
} from "./styled/StyledContact";
import {
  StyledFooter,
  StyledFooterInfo,
  StyledFooterLink,
  StyledFooterPicture,
} from "./styled/StyledFooter";

function App() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  // const location = useLocation();

  React.useEffect(() => {
    const handleScreenWidth = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 769) {
        setOpenMenu(false);
      }
    };
    window.addEventListener("resize", handleScreenWidth);
    return () => window.removeEventListener("resize", handleScreenWidth);
  }, []);

  return (
    <HashRouter>
      <StyledRWD>
        {openMenu && (
          <StyledFullScreenContainer
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            <StyledMenu>
              <StyledClose />
              <StyledClose />
            </StyledMenu>
            <StyledFullScreenMenu to="#about">關於</StyledFullScreenMenu>
            <StyledFullScreenMenu to="#services">服務</StyledFullScreenMenu>
            <StyledFullScreenMenu to="#reservation">訂位</StyledFullScreenMenu>
            <StyledFullScreenMenu to="#menu">菜單</StyledFullScreenMenu>
            <StyledFullScreenMenu to="#contact">聯絡</StyledFullScreenMenu>
          </StyledFullScreenContainer>
        )}
        <StyledNavBar>
          <StyledContainer>
            <StyledFlex $justify={"space-between"} $add={"padding:0px 16px;"}>
              <StyledLogo>
                <h1>日沐咖啡 Rimoo Cafe</h1>
              </StyledLogo>
              <StyledFlex>
                <StyledNavBarLink to="#about">關於</StyledNavBarLink>
                <StyledNavBarLink to="#services">服務</StyledNavBarLink>
                <StyledNavBarLink to="#reservation">訂位</StyledNavBarLink>
                <StyledNavBarLink to="#menu">菜單</StyledNavBarLink>
                <StyledNavBarLink to="#contact">聯絡</StyledNavBarLink>
                {!openMenu && (
                  <StyledMenu
                    onClick={() => {
                      setOpenMenu(!openMenu);
                    }}
                  >
                    <StyledOpenLine />
                    <StyledOpenLine />
                    <StyledOpenLine />
                  </StyledMenu>
                )}
              </StyledFlex>
            </StyledFlex>
          </StyledContainer>
        </StyledNavBar>
        <StyledJumbotron>
          <StyledDark />
          <StyledContainer>
            <StyledJumbotronLogo />
            <StyledFlex
              $gap={"20px"}
              $direction={"column"}
              $add={`
              // flex-direction:column;
              @media screen and (min-width:541px){
                flex-direction:row;
              }`}
            >
              <StyledHashLink to="#!">
                <StyledBtn>這是一個按鈕</StyledBtn>
              </StyledHashLink>

              <StyledHashLink to="#!">
                <StyledBtnSecond>這是一個按鈕</StyledBtnSecond>
              </StyledHashLink>
            </StyledFlex>
          </StyledContainer>
        </StyledJumbotron>
        <StyledAbout id="about">
          <StyledContainer $add={"padding:10px 30px;"}>
            <StyledFlex $wrap={"wrap"}>
              <StyledTextContainer className="col-12 col-lg-6">
                <StyledTitle color={"black"} $text={"start"}>
                  每杯咖啡留著手的餘溫
                </StyledTitle>
                <StyledText $text={"justify"}>
                  一個咖啡有溫度的故事，只要咖啡加熱，沸騰到攝氏100度，你就可以用手摸摸看，應該會十分的燙手，一個咖啡有溫度的故事，只要咖啡加熱，沸騰到攝氏100度，你就可以用手摸摸看，應該會十分的燙手，一個咖啡有溫度的故事，只要咖啡加熱，沸騰到攝氏100度，你就可以用手摸摸看，應該會十分的燙手。
                </StyledText>
                <StyledHashLink to="#!">
                  <StyledBtn>更多關於我們的故事</StyledBtn>
                </StyledHashLink>
              </StyledTextContainer>
              <StyledImageContainer className="col-12 col-lg-6">
                <StyledImg />
              </StyledImageContainer>
            </StyledFlex>
          </StyledContainer>
        </StyledAbout>
        <StyledServices id="services">
          <StyledContainer>
            <StyledTitle color={"black"}>SERVICES</StyledTitle>
            <StyledText>
              我們提供的服務在這裡有初步的介紹，諸如此類的介紹等等
              <br />
              多的文字就可以換行繼續寫
            </StyledText>
            <StyledInfo>
              <StyledFlex $wrap={"wrap"} $justify={"flex-start"}>
                <StyledItem className="col-12 col-md-6 col-lg-4">
                  <StyledProdcut $url={product001} />
                  <StyledInfoTitle>
                    香濃的咖啡香濃的咖啡香濃的咖啡香濃的咖啡香濃的咖啡香濃的咖啡香濃的咖啡香濃的咖啡
                  </StyledInfoTitle>
                  <StyledInfoH5>現煮的香濃咖啡，優質的咖啡豆</StyledInfoH5>
                  <StyledInfoText>
                    一段中文的敘述文字，說明東西的美味及外觀等等的話一段中文的敘述文字，說明東西的美味及外觀等等的話一段中文的敘述文字，說明東西的美味及外觀等等的話一段中文的敘述文字，說明東西的美味及外觀等等的話一段中文的敘述文字，說明東西的美味及外觀等等的話
                  </StyledInfoText>
                  <StyledBtnSecond>Read More</StyledBtnSecond>
                </StyledItem>
                <StyledItem className="col-12 col-md-6 col-lg-4">
                  <StyledProdcut $url={product002} />
                  <StyledInfoTitle>
                    香濃的咖啡香濃的咖啡香濃的咖啡香濃的咖啡香濃的咖啡香濃的咖啡香濃的咖啡香濃的咖啡
                  </StyledInfoTitle>
                  <StyledInfoH5>現煮的香濃咖啡，優質的咖啡豆</StyledInfoH5>
                  <StyledInfoText>
                    一段中文的敘述文字，說明東西的美味及外觀等等的話一段中文的敘述文字，說明東西的美味及外觀等等的話一段中文的敘述文字，說明東西的美味及外觀等等的話一段中文的敘述文字，說明東西的美味及外觀等等的話一段中文的敘述文字，說明東西的美味及外觀等等的話
                  </StyledInfoText>
                  <StyledBtnSecond>Read More</StyledBtnSecond>
                </StyledItem>
                <StyledItem className="col-12 col-md-6 col-lg-4">
                  <StyledProdcut $url={product003} />
                  <StyledInfoTitle>
                    香濃的咖啡香濃的咖啡香濃的咖啡香濃的咖啡香濃的咖啡香濃的咖啡香濃的咖啡香濃的咖啡
                  </StyledInfoTitle>
                  <StyledInfoH5>現煮的香濃咖啡，優質的咖啡豆</StyledInfoH5>
                  <StyledInfoText>
                    一段中文的敘述文字，說明東西的美味及外觀等等的話一段中文的敘述文字，說明東西的美味及外觀等等的話一段中文的敘述文字，說明東西的美味及外觀等等的話一段中文的敘述文字，說明東西的美味及外觀等等的話一段中文的敘述文字，說明東西的美味及外觀等等的話
                  </StyledInfoText>
                  <StyledBtnSecond>Read More</StyledBtnSecond>
                </StyledItem>
              </StyledFlex>
            </StyledInfo>
          </StyledContainer>
        </StyledServices>

        <StyledReservation id="reservation">
          <StyledDark />
          <StyledContainer $add={"text-align:center;"}>
            <StyledTitle size={"48px"}>RESERVATION</StyledTitle>
            <StyledText color={"white"}>
              我們提供的服務在這裡有初步的介紹，諸如此類的介紹等等
              <br />
              多的文字就可以換行繼續寫
            </StyledText>
            <StyledBtn>訂位請點我</StyledBtn>
          </StyledContainer>
        </StyledReservation>
        <StyledMenuContainer id="menu">
          <StyledContainer>
            <StyledTitle color={"black"}>MENU</StyledTitle>
            <StyledText>
              我們提供的服務在這裡有初步的介紹，諸如此類的介紹等等
              <br />
              多的文字就可以換行繼續寫
            </StyledText>
            <StyledMenuList>
              <StyledFlex $justify={"space-between"}>
                <StyledMenuTitle>Coffee & Beverage</StyledMenuTitle>
                {windowWidth > 768 && <StyledBtnSecond>more</StyledBtnSecond>}
              </StyledFlex>
              <StyledFlex $wrap={"wrap"} $add={"margin:-10px;"}>
                <StyledMenuItem className="col-12 col-md-6 col-lg-3" to="#!">
                  <StyledMenuProduct $url={product005} />
                  <StyledMenuItemTitle>供應的條件</StyledMenuItemTitle>
                  <StyledMenuItemText>阿拉斯加咖啡</StyledMenuItemText>
                </StyledMenuItem>
                <StyledMenuItem className="col-12 col-md-6 col-lg-3" to="#!">
                  <StyledMenuProduct $url={product006} />
                  <StyledMenuItemTitle>供應的條件</StyledMenuItemTitle>
                  <StyledMenuItemText>阿拉斯加咖啡</StyledMenuItemText>
                </StyledMenuItem>
                <StyledMenuItem className="col-12 col-md-6 col-lg-3" to="#!">
                  <StyledMenuProduct $url={product007} />
                  <StyledMenuItemTitle>供應的條件</StyledMenuItemTitle>
                  <StyledMenuItemText>阿拉斯加咖啡</StyledMenuItemText>
                </StyledMenuItem>
                <StyledMenuItem className="col-12 col-md-6 col-lg-3" to="#!">
                  <StyledMenuProduct $url={product008} />
                  <StyledMenuItemTitle>供應的條件</StyledMenuItemTitle>
                  <StyledMenuItemText>阿拉斯加咖啡</StyledMenuItemText>
                </StyledMenuItem>
              </StyledFlex>
            </StyledMenuList>
            <StyledMenuList>
              <StyledFlex $justify={"space-between"}>
                <StyledMenuTitle>Coffee & Beverage</StyledMenuTitle>
                {windowWidth > 768 && <StyledBtnSecond>more</StyledBtnSecond>}
              </StyledFlex>
              <StyledFlex $wrap={"wrap"} $add={"margin:-10px;"}>
                <StyledMenuItem className="col-12 col-md-6 col-lg-3" to="#!">
                  <StyledMenuProduct $url={product005} />
                  <StyledMenuItemTitle>供應的條件</StyledMenuItemTitle>
                  <StyledMenuItemText>阿拉斯加咖啡</StyledMenuItemText>
                </StyledMenuItem>
                <StyledMenuItem className="col-12 col-md-6 col-lg-3" to="#!">
                  <StyledMenuProduct $url={product006} />
                  <StyledMenuItemTitle>供應的條件</StyledMenuItemTitle>
                  <StyledMenuItemText>阿拉斯加咖啡</StyledMenuItemText>
                </StyledMenuItem>
                <StyledMenuItem className="col-12 col-md-6 col-lg-3" to="#!">
                  <StyledMenuProduct $url={product007} />
                  <StyledMenuItemTitle>供應的條件</StyledMenuItemTitle>
                  <StyledMenuItemText>阿拉斯加咖啡</StyledMenuItemText>
                </StyledMenuItem>
                <StyledMenuItem className="col-12 col-md-6 col-lg-3" to="#!">
                  <StyledMenuProduct $url={product008} />
                  <StyledMenuItemTitle>供應的條件</StyledMenuItemTitle>
                  <StyledMenuItemText>阿拉斯加咖啡</StyledMenuItemText>
                </StyledMenuItem>
              </StyledFlex>
            </StyledMenuList>
          </StyledContainer>
        </StyledMenuContainer>
        <StyledContact id="contact">
          <StyledContainer>
            <StyledTitle color={"black"} size={"48px"}>
              CONTACT
            </StyledTitle>
            <StyledText>
              我們提供的服務在這裡有初步的介紹，諸如此類的介紹等等
              <br />
              多的文字就可以換行繼續寫
            </StyledText>
            <StyledFlex $wrap={"wrap"} $add={"padding:10px 30px;"}>
              <StyledContactInfo className="col-12 col-lg-6">
                <StyledContactTitle>PHONE & TEL</StyledContactTitle>
                <StyledContactText>0912-345-678</StyledContactText>
                <StyledContactTitle>LOCATION</StyledContactTitle>
                <StyledContactText>高雄市苓雅區某某路 123 號</StyledContactText>
                <StyledContactTitle>HOURS</StyledContactTitle>
                <StyledContactText>
                  上午 11:00 至下午 6:00、週四公休
                </StyledContactText>
              </StyledContactInfo>
              <StyledContactMap className="col-12 col-lg-6">
                <StyledMap>
                  <iframe
                    title="Google Maps location for Rimoo Cafe"
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1872701.4985836851!2d120.6402133!3d23.546162!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1728112772298!5m2!1szh-TW!2stw"
                    style={{
                      border: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </StyledMap>
              </StyledContactMap>
            </StyledFlex>
          </StyledContainer>
        </StyledContact>
        <StyledFooter>
          <StyledDark />
          <StyledContainer>
            <StyledFooterPicture></StyledFooterPicture>
            <StyledFlex>
              <StyledFooterLink to="#about">關於</StyledFooterLink>
              <StyledFooterLink to="#services">服務</StyledFooterLink>
              <StyledFooterLink to="#reservation">訂位</StyledFooterLink>
              <StyledFooterLink to="#menu">菜單</StyledFooterLink>
              <StyledFooterLink to="#contact">聯絡</StyledFooterLink>
            </StyledFlex>
          </StyledContainer>
        </StyledFooter>
        <StyledFooterInfo>
          © Copyright 2020 All rights reserved
        </StyledFooterInfo>
      </StyledRWD>
    </HashRouter>
  );
}

export default App;
