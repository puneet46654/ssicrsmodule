"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, ChangeEvent } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

type FormValue = string | number | boolean | File | string[] | null;

const modalContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const modalCardVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const buttonHover = { scale: 1.03, transition: { duration: 0.2 } };
const buttonTap = { scale: 0.97 };
const inputHover = { scale: 1.005, transition: { duration: 0.1 } };
const inputFocus = {
  scale: 1.005,
  boxShadow: "0 0 0 2px #A67950",
  transition: { duration: 0.2 },
};

interface SuccessModalProps {
  ticketNo: string | number;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ ticketNo, onClose }) => {
  return (
    <motion.div
      variants={modalContainerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
    >
      <motion.div
        variants={modalCardVariants}
        className="bg-white rounded-3xl p-12 shadow-2xl max-w-lg w-full text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
          className="text-green-600 mb-6"
        >
          <CheckCircle className="w-20 h-20" strokeWidth={1.5} />
        </motion.div>

        <h2 className="text-3xl font-bold text-[#401323] mb-3 font-sans">
          Registration Successful!
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 text-lg mb-6 font-sans"
        >
          Thank you for enrolling. Your application has been received.
        </motion.p>
        
        <motion.div 
            className="w-full p-4 bg-green-50 rounded-xl border border-green-200 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
        >
            <p className="text-sm font-semibold text-green-800 font-sans">Your Ticket Number:</p>
            <p className="text-3xl font-extrabold text-green-700 tracking-wider mt-1 font-sans">{ticketNo}</p>
        </motion.div>

        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-semibold text-white bg-[#A67950] py-3 px-8 rounded-full shadow-md hover:bg-[#8d6241] transition-colors font-sans"
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default function RegisterPage() {
  const [formData, setFormData] = useState<Record<string, FormValue>>({});
  const [loading, setLoading] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [ticketNumber, setTicketNumber] = useState<string | number | null>(null); 
  
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error" | "";
  }>({
    text: "",
    type: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value, type } = e.target;
    if (type === "checkbox") {
      const checkboxElement = e.target as HTMLInputElement;
      const currentValues = (formData[id] as string[]) || [];

      if (checkboxElement.checked) {
        setFormData({
          ...formData,
          [id]: [...currentValues, value],
        });
      } else {
        setFormData({
          ...formData,
          [id]: currentValues.filter((v: string) => v !== value),
        });
      }
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleTermsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, termsAgree: e.target.checked });
  };

  const handleSubmit = async () => {
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
        setLoading(false);
        setTicketNumber("REF-2025-8899");
        setShowSuccessScreen(true);
        setFormData({});
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col pb-32 font-sans relative overflow-x-hidden">
      
      <AnimatePresence>
        {showSuccessScreen && ticketNumber && (
          <SuccessModal 
            ticketNo={ticketNumber} 
            onClose={() => setShowSuccessScreen(false)} 
          />
        )}
      </AnimatePresence>
      
      <motion.div
        className="w-full px-6 py-4 flex justify-between items-center shadow-md bg-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <motion.div
        className="flex flex-col text-center px-4 pt-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-sans text-6xl text-center font-normal leading-tight text-[#A67950]"
          variants={textVariants}
        >
          Take the First Step Toward
          <br />
          Advancing Your Robotic Surgery Skills
        </motion.h1>

        <motion.p
          className="text-xl text-center text-[#401323] leading-relaxed mt-8 font-sans"
          variants={textVariants}
        >
          Please complete the form below to enroll into our comprehensive robotic
          surgery training programs.
          <br />
          Upon successful registration, our team will reach out with program
          details, schedules, and next steps.
        </motion.p>

        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-xl p-12 max-w-5xl mx-auto w-full"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="grid grid-cols-2 gap-x-24 gap-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <label
                htmlFor="fullName"
                className="block text-left mb-1 text-base font-medium text-[#401323] font-sans"
              >
                Full Name
              </label>
              <motion.input
                id="fullName"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent font-sans"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
                value={String(formData.fullName || '')}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-left mb-1 text-base font-medium text-[#401323] font-sans"
              >
                Email
              </label>
              <motion.input
                id="email"
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent font-sans"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
                value={String(formData.email || '')}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="phoneNumber"
                className="block text-left mb-1 text-base font-medium text-[#401323] font-sans"
              >
                Phone Number
              </label>
              <motion.input
                id="phoneNumber"
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent font-sans"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
                value={String(formData.phoneNumber || '')}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="dob"
                className="block text-left mb-1 text-base font-medium text-[#401323] font-sans"
              >
                Date of Birth
              </label>
              <motion.input
                id="dob"
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent font-sans"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
                value={String(formData.dob || '')}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="experience"
                className="block text-left mb-1 text-base font-medium text-[#401323] font-sans"
              >
                Years of Experience
              </label>
              <motion.input
                id="experience"
                type="number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent font-sans"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
                value={String(formData.experience || '')}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="institution"
                className="block text-left mb-1 text-base font-medium text-[#401323] font-sans"
              >
                Affiliated Institution/Hospital
              </label>
              <motion.input
                id="institution"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent font-sans"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
                value={String(formData.institution || '')}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="callDateTime"
                className="block text-left mb-1 text-base font-medium text-[#401323] font-sans"
              >
                Preferred Call Date and Time
              </label>
              <motion.input
                id="callDateTime"
                type="datetime-local"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent font-sans"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
                value={String(formData.callDateTime || '')}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="hearAboutUs"
                className="block text-left mb-1 text-base font-medium text-[#401323] font-sans"
              >
                How Did You Hear About Us?
              </label>
              <motion.select
                id="hearAboutUs"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent font-sans"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
                value={String(formData.hearAboutUs || '')}
              >
                <option value=""></option>
              </motion.select>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="currentProfession"
                className="block text-left mb-1 text-base font-medium text-[#401323] font-sans"
              >
                Current Profession
              </label>
              <motion.select
                id="currentProfession"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent font-sans"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
                value={String(formData.currentProfession || '')}
              >
                <option value=""></option>
              </motion.select>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="specialization"
                className="block text-left mb-1 text-base font-medium text-[#401323] font-sans"
              >
                Specialization
              </label>
              <motion.select
                id="specialization"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent font-sans"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
                value={String(formData.specialization || '')}
              >
                <option value=""></option>
              </motion.select>
            </motion.div>
            
            <motion.div variants={itemVariants} className="col-span-2">
              <label
                htmlFor="learningGoals"
                className="block text-left mb-1 text-base font-medium text-[#401323] font-sans"
              >
                Any Specific Learning Goals or Comments?
              </label>
              <motion.textarea
                id="learningGoals"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#A67950] focus:border-transparent font-sans"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
                value={String(formData.learningGoals || '')}
              />
            </motion.div>
          </motion.div>

          <div className="border-t border-gray-300 my-12"></div>

          <motion.div
            className="flex flex-col items-center justify-center w-full"
            variants={containerVariants}
          >
            <motion.h2
              className="font-sans text-3xl text-center font-normal leading-tight text-[#A67950] mb-8"
              variants={itemVariants}
            >
              Select Your Training Programs
            </motion.h2>
            <div className="flex flex-row justify-center items-start gap-16 w-full">
              <motion.div
                className="flex flex-col items-start p-4 bg-white rounded-lg shadow-sm"
                variants={itemVariants}
              >
                <label className="font-medium text-lg text-[#401323] mb-3 font-sans">
                  Core Programs
                </label>
                <div className="flex flex-col gap-3">
                  <motion.div
                    className="flex items-center cursor-pointer"
                    whileHover={buttonHover}
                    whileTap={buttonTap}
                  >
                    <input
                      type="checkbox"
                      id="trainingPrograms"
                      value="Surgeon Training"
                      className="mr-3 accent-[#A67950] w-5 h-5 cursor-pointer"
                      onChange={handleChange}
                      checked={Array.isArray(formData.trainingPrograms) && formData.trainingPrograms.includes("Surgeon Training")}
                    />
                    <label
                      htmlFor="trainingPrograms"
                      className="text-base font-medium text-[#401323] cursor-pointer font-sans"
                    >
                      Surgeon Training
                    </label>
                  </motion.div>
                  <motion.div
                    className="flex items-center cursor-pointer"
                    whileHover={buttonHover}
                    whileTap={buttonTap}
                  >
                    <input
                      type="checkbox"
                      id="trainingPrograms"
                      value="Surgical Staff Training"
                      className="mr-3 accent-[#A67950] w-5 h-5 cursor-pointer"
                      onChange={handleChange}
                      checked={Array.isArray(formData.trainingPrograms) && formData.trainingPrograms.includes("Surgical Staff Training")}
                    />
                    <label
                      htmlFor="trainingPrograms"
                      className="text-base font-medium text-[#401323] cursor-pointer font-sans"
                    >
                      Surgical Staff Training
                    </label>
                  </motion.div>
                  <motion.div
                    className="flex items-center cursor-pointer"
                    whileHover={buttonHover}
                    whileTap={buttonTap}
                  >
                    <input
                      type="checkbox"
                      id="trainingPrograms"
                      value="Anesthesia Training for Robotic Surgery"
                      className="mr-3 accent-[#A67950] w-5 h-5 cursor-pointer"
                      onChange={handleChange}
                      checked={Array.isArray(formData.trainingPrograms) && formData.trainingPrograms.includes("Anesthesia Training for Robotic Surgery")}
                    />
                    <label
                      htmlFor="trainingPrograms"
                      className="text-base font-medium text-[#401323] cursor-pointer font-sans"
                    >
                      Anesthesia Training for Robotic Surgery
                    </label>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="p-4 bg-white rounded-lg shadow-sm flex flex-col items-start"
                variants={itemVariants}
              >
                <label className="font-medium text-lg text-[#401323] mb-3 font-sans">
                  Additional Programs
                </label>
                <div className="flex flex-col gap-3">
                  <motion.div
                    className="flex items-center cursor-pointer"
                    whileHover={buttonHover}
                    whileTap={buttonTap}
                  >
                    <input
                      type="checkbox"
                      id="additionalPrograms"
                      value="MantraSync Tele-Surgery Program"
                      className="mr-3 accent-[#A67950] w-5 h-5 cursor-pointer"
                      onChange={handleChange}
                      checked={Array.isArray(formData.additionalPrograms) && formData.additionalPrograms.includes("MantraSync Tele-Surgery Program")}
                    />
                    <label
                      htmlFor="additionalPrograms"
                      className="text-base font-medium text-[#401323] cursor-pointer font-sans"
                    >
                      MantraSync Tele-Surgery Program
                    </label>
                  </motion.div>
                  <motion.div
                    className="flex items-center cursor-pointer"
                    whileHover={buttonHover}
                    whileTap={buttonTap}
                  >
                    <input
                      type="checkbox"
                      id="additionalPrograms"
                      value="Animal Lab Training"
                      className="mr-3 accent-[#A67950] w-5 h-5 cursor-pointer"
                      onChange={handleChange}
                      checked={Array.isArray(formData.additionalPrograms) && formData.additionalPrograms.includes("Animal Lab Training")}
                    />
                    <label
                      htmlFor="additionalPrograms"
                      className="text-base font-medium text-[#401323] cursor-pointer font-sans"
                    >
                      Animal Lab Training
                    </label>
                  </motion.div>
                  <motion.div
                    className="flex items-center cursor-pointer"
                    whileHover={buttonHover}
                    whileTap={buttonTap}
                  >
                    <input
                      type="checkbox"
                      id="additionalPrograms"
                      value="Cadaver Lab Training"
                      className="mr-3 accent-[#A67950] w-5 h-5 cursor-pointer"
                      onChange={handleChange}
                      checked={Array.isArray(formData.additionalPrograms) && formData.additionalPrograms.includes("Cadaver Lab Training")}
                    />
                    <label
                      htmlFor="additionalPrograms"
                      className="text-base font-medium text-[#401323] cursor-pointer font-sans"
                    >
                      Cadaver Lab Training
                    </label>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="border-t border-gray-300 my-12"></div>

          <motion.div
            className="flex flex-col items-center w-full"
            variants={itemVariants}
          >
            <motion.h2
              className="font-sans text-3xl text-center font-normal leading-tight text-[#A67950] mb-8"
              variants={itemVariants}
            >
              Final Steps
            </motion.h2>

            <motion.div
              className="flex flex-col items-start w-full max-w-xl mb-8"
              variants={itemVariants}
            >
              <label
                htmlFor="uploadId"
                className="block text-left mb-1 text-base font-medium text-[#401323] font-sans"
              >
                Upload ID
              </label>
              <motion.input
                id="uploadId"
                type="file"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#A67950] file:text-white hover:file:bg-[#8d6241] font-sans"
                onChange={handleChange}
                whileHover={inputHover}
                whileFocus={inputFocus}
              />
            </motion.div>

            <motion.div
              className="flex flex-col items-center max-w-xl mx-auto w-full"
              variants={itemVariants}
            >
              <div className="flex items-start mb-6 w-full cursor-pointer">
                <motion.input
                  type="checkbox"
                  id="termsAgree"
                  className="mr-3 mt-1 cursor-pointer accent-[#A67950] shrink-0 w-5 h-5"
                  onChange={handleTermsChange}
                  checked={!!formData.termsAgree}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
                <label
                  htmlFor="termsAgree"
                  className="text-sm font-medium text-[#401323] text-left cursor-pointer font-sans"
                >
                  By clicking on &quot;Register Now&quot;, you agree to our{" "}
                  <a
                    href="#"
                    className="text-blue-500 cursor-pointer hover:underline font-sans"
                  >
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-blue-500 cursor-pointer hover:underline font-sans"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
              <motion.button
                onClick={handleSubmit}
                disabled={loading || !formData.termsAgree} 
                className="font-bold text-lg text-white bg-[#A67950] py-4 px-8 border-none rounded-full w-full max-w-md cursor-pointer shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed font-sans"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5"
                    >
                      <Loader2 className="w-5 h-5" />
                    </motion.div>
                    <span>Registering...</span>
                  </div>
                ) : (
                  "Register Now"
                )}
              </motion.button>

            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}