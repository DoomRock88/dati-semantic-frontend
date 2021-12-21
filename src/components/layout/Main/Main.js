import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import SearchPage from "../../search/SearchPage/SearchPage";
import AssetDetailsPage from "../../semantic-assets/DetailsPage/AssetDetailsPage";
import {
  API_DOCS_URL,
  ASSETS_BASE_URL_TOKEN,
  ASSETS_URL_TOKEN,
  FAQ_URL,
  PROJECT_URL,
  SEARCH_BASE_URL,
} from "../../../services/routes";
import ExplorePage from "../../explore/ExplorePage/ExplorePage";
import FaqPage from "../../static-content/faq/FaqPage/FaqPage";
import ProjectPage from "../../static-content/project/ProjectPage/ProjectPage";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Swagger from "../../swagger-ui/Swagger";

const Main = () => (
  <main>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<ExplorePage />} />
      <Route path={SEARCH_BASE_URL} element={<SearchPage />} />
      <Route path={FAQ_URL} element={<FaqPage />} />
      <Route path={PROJECT_URL} element={<ProjectPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path={ASSETS_BASE_URL_TOKEN}>
        <Route path={ASSETS_URL_TOKEN} element={<AssetDetailsPage />} />
        <Route index path="*" element={<NotFound />} />
      </Route>
      <Route path={API_DOCS_URL} element={<Swagger />} />
    </Routes>
  </main>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
