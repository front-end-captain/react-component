import React from "react";
import {
  FiXCircle,
  FiAlertCircle,
  FiX,
  FiChevronUp,
  FiChevronDown,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";
import { FaSpinner, FaRegCheckCircle } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

import OneQuarterLoading from "./oneQuarterLoading.jsx";

export const PointLoadingIcon = (props) => <FaSpinner {...props} />;
export const CircleLoadingIcon = (props) => <OneQuarterLoading {...props} />;

export const InfoIcon = (props) => <IoIosInformationCircleOutline {...props} />;
export const SuccessIcon = (props) => <FaRegCheckCircle {...props} />;
export const ErrorIcon = (props) => <FiXCircle {...props} />;
export const WarningIcon = (props) => <FiAlertCircle {...props} />;

export const CloseIcon = (props) => <FiX {...props} />;
export const UpIcon = (props) => <FiChevronUp {...props} />;
export const DownIcon = (props) => <FiChevronDown {...props} />;
export const ArrowRightIcon = (props) => <FiChevronRight {...props} />;
export const ArrowLeftIcon = (props) => <FiChevronLeft {...props} />;
