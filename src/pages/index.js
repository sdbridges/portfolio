import React, {useContext} from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import '../style/darkMode.css';
import {useTheme, css } from "@emotion/react"
import Context from "../store/context"
import Layout from "../components/Layout"
import 'font-awesome/css/font-awesome.min.css';


export default () => {
  const { title, lang, description } = headData;
  const {state, dispatch} = useContext(Context);
  const theme = useTheme();

  return (
    <div css={css`
      h1, h2, h3, p {
        color: ${state.isDark ? theme.dark.font : theme.light.font}
      }

      #hero, #projects {
        background-color: ${state.isDark ? theme.light.font : theme.dark.font}
      }
    `}>
    <Layout>
      <label id="switch" className="switch">
          <input type="checkbox"  onClick={() => dispatch({type: "TOGGLE_DARK_MODE"})} id="slider" />
          <span className="slider round" />
      </label>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Stuart Bridges\'s Portfolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Stuart Bridges\'s Portfolio'} />
      </Helmet>
      <App />
      </Layout>
      </div>
  );
};
