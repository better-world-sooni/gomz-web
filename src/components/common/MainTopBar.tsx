import { IMAGES } from "src/modules/images";
import Div from "../Div";
import { FaBars, FaBook, FaDiscord, FaInstagram, FaTimes, FaTwitter, FaWindowMinimize, FaXbox, FaXing, FaXingSquare } from "react-icons/fa";
import { href, LOCALES, reloadWithLocale } from "src/helpers/routeHelper";
import { urls } from "src/modules/urls";
import { useRouter } from "next/router";
import useIsTablet from "src/hooks/useIsTablet";
import { useState } from "react";
import { useKaikas } from "src/hooks/klaytn/useKaikas";
import { truncateKlaytnAddress } from "src/helpers/klaytnAddressHelper";
import { MintingModal } from "../modal/MintingModal";
import { InviteModal } from "../modal/InviteModal";
import { RebirthModal } from "../modal/RebirthModal";
import { COLORS } from "src/modules/colors";
import { useAddressState } from "src/hooks/klaytn/useAddressState";
import { useDispatch } from "react-redux";
import { betterWorldModalAction } from "src/store/reducers/modalReducer";
import { BetterWorldModal } from "../modal/BetterWorldModal";
import { AlertModal } from "../modal/AlertModal";

function MainTopBar({ absolute = false }) {
  const isTablet = useIsTablet();
  const [clicked, setClicked] = useState(false);
  const { locale } = useRouter();
  const dispatch = useDispatch();
  const handleClickWebe = () => {
    href(urls.index);
  };
  const handleClickCheckOnMyWebes = () => {
    href(urls["my-webes"].index);
  };
  const handleClickBetterWorld = () => {
    dispatch(betterWorldModalAction({ enabled: true }));
  };
  const kaikas = useKaikas();
  const { balance } = useAddressState({
    kaikas,
  });
  const connectWallet = async () => {
    if (kaikas) {
      await kaikas.enable();
    }
  };

  if (isTablet) {
    return (
      <>
        <Div wFull z30 px15 py15 bgSecondary absolute>
          <Div flex mxAuto maxW={1150} itemsCenter>
            <Div onClick={handleClickWebe} cursorPointer>
              <Div w70 imgTag src={IMAGES.logos.webeLogoProduction} onClick={handleClickWebe} cursorPointer></Div>
            </Div>
            <Div flex1></Div>
            <Div onClick={() => setClicked((prev) => !prev)}>
              {clicked ? <FaTimes size={25} color={COLORS.SECONDARY2} /> : <FaBars size={25} color={COLORS.SECONDARY2} />}
            </Div>
          </Div>
        </Div>
        {clicked && (
          <Div absolute z20 top0 wFull hScreen style={{ background: COLORS.SECONDARY, backdropFilter: "blur(20px)" }}>
            <Div mt100 mx15 textSecondary2 fontSize24>
              <Div
                mt20
                flex
                px30
                py10
                border2
                borderSecondary2
                bgSecondary
                roundedLg
                itemsCenter
                cursorPointer
                aTag
                href={"https://discord.com/invite/7tV3WxWf8p"}
              >
                <Div mr18>Discord</Div>
                <FaDiscord size={20} />
              </Div>
              <Div mt20 flex px30 py10 border2 borderSecondary2 bgSecondary roundedLg itemsCenter cursorPointer aTag href={"https://www.betterworldapp.io"}>
                <Div mr18>BetterWorld</Div>
                <Div w20 imgTag src={IMAGES.logos.betterWorld}></Div>
              </Div>
              <Div
                mt20
                flex
                px30
                py10
                border2
                borderSecondary2
                bgSecondary
                roundedLg
                itemsCenter
                cursorPointer
                aTag
                href={"https://twitter.com/webe_weirdbears"}
              >
                <Div mr18> Twitter</Div>
                <FaTwitter size={20} />
              </Div>
              <Div mt20 flex px30 py10 border2 borderSecondary2s bgSecondary roundedLg itemsCenter cursorPointer aTag href={"https://instagram.com/weirdbears"}>
                <Div mr18>Instagram</Div>
                <FaInstagram size={20} />
              </Div>
            </Div>
            <Div flex justifyCenter mt20 mx15>
              <Div
                flex1
                flex
                justifyCenter
                text2xl
                textPrimary={locale == LOCALES.KO}
                textSecondary2={locale != LOCALES.KO}
                cursorPointer
                onClick={() => reloadWithLocale(LOCALES.KO)}
              >
                KOREAN
              </Div>
              <Div flex justifyCenter text2xl textSecondary2>
                l
              </Div>
              <Div
                flex1
                flex
                justifyCenter
                text2xl
                textPrimary={locale == LOCALES.EN}
                textSecondary2={locale != LOCALES.EN}
                cursorPointer
                onClick={() => reloadWithLocale(LOCALES.EN)}
              >
                ENGLISH
              </Div>
            </Div>
          </Div>
        )}
        <BetterWorldModal />
      </>
    );
  }
  return (
    <Div sticky={!absolute} absolute={absolute} top0 wFull z200 px80 py12 bgSecondary={!absolute} bgBlack={absolute} bgOpacity30={absolute}>
      <MintingModal />
      <InviteModal />
      <RebirthModal />
      <BetterWorldModal />
      <AlertModal />
      <Div flex mxAuto maxW={1150}>
        <Div onClick={handleClickWebe} cursorPointer>
          <Div w100 imgTag src={IMAGES.logos.webeLogoProduction}></Div>
        </Div>
        <Div flex1></Div>
        <Div flex flexRow itemsCenter>
          {balance > 0 && (
            <Div mr10 textSecondary2 cursorPointer onClick={handleClickCheckOnMyWebes}>
              <Div roundedFull py4 pr10 fontSize12 trackingWidest clx={"group transition hover:text-primary-light"}>
                MY WEBES
              </Div>
            </Div>
          )}
          <Div mr10 textSecondary2 clx={"group transition hover:text-primary-light"} cursorPointer aTag href={"https://discord.com/invite/7tV3WxWf8p"}>
            <FaDiscord size={30} />
          </Div>
          <Div mx10 clx={"group transition hover:opacity-50"} cursorPointer aTag href={"https://www.betterworldapp.io"}>
            <Div imgTag src={IMAGES.logos.betterWorld} h25 wAuto></Div>
          </Div>
          <Div mx10 textSecondary2 clx={"group transition hover:text-primary-light"} cursorPointer aTag href={"https://twitter.com/webe_weirdbears"}>
            <FaTwitter size={25} />
          </Div>
          <Div mx10 textSecondary2 clx={"group transition hover:text-primary-light"} cursorPointer aTag href={"https://instagram.com/weirdbears"}>
            <FaInstagram size={25} />
          </Div>
          <Div
            mx10
            textSm
            textPrimary={locale == LOCALES.KO}
            textSecondary2={locale != LOCALES.KO}
            clx={"group transition hover:text-primary-light"}
            cursorPointer
            onClick={() => reloadWithLocale(LOCALES.KO)}
          >
            KOR
          </Div>
          <Div textSm textSecondary2>
            l
          </Div>
          <Div
            ml10
            textSm
            textPrimary={locale == LOCALES.EN}
            textSecondary2={locale != LOCALES.EN}
            clx={"group transition hover:text-primary-light"}
            cursorPointer
            onClick={() => reloadWithLocale(LOCALES.EN)}
          >
            ENG
          </Div>
        </Div>
      </Div>
    </Div>
  );
}

export default MainTopBar;
