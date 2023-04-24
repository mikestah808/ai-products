import { useState, useEffect } from "react";
import { AnimatePresence , motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import config from '../config/config';
import store from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { AIPicker, ColorPicker, FilePicker, CustomButton, Tab } from "../components";


const Customizer = () => {
  return (
    <div>Customizer</div>
  )
}

export default Customizer