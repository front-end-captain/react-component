import React from "react";
import {
  FiVolume2,
  FiLoader,
  FiCheckCircle,
  FiXCircle,
  FiAlertCircle,
  FiX,
  FiChevronUp,
  FiChevronDown,
  FiChevronRight,
  FiChevronLeft,
  FiUploadCloud,
  FiCalendar,
} from "react-icons/fi";

export const InfoIcon = (props) => <FiVolume2 {...props} />;
export const LoadingIcon = (props) => <FiLoader {...props} />;
export const SuccessIcon = (props) => <FiCheckCircle {...props} />;
export const ErrorIcon = (props) => <FiXCircle {...props} />;
export const WarningIcon = (props) => <FiAlertCircle {...props} />;
export const CloseIcon = (props) => <FiX {...props} />;
export const UpIcon = (props) => <FiChevronUp {...props} />;
export const DownIcon = (props) => <FiChevronDown {...props} />;
export const ArrowRightIcon = (props) => <FiChevronRight {...props} />;
export const ArrowLeftIcon = (props) => <FiChevronLeft {...props} />;
export const FileUploadIcon = (props) => <FiUploadCloud {...props} />;
export const CalendarIcon = (props) => <FiCalendar {...props} />;
