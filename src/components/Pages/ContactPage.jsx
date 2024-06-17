import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import mail from '../../assets/Mail.png'
import phone from '../../assets/Phone.png'

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className='p-5 md:p-30'>
        <div className='max-w-4xl mx-auto'>

          <div className='mt-10 flex flex-col md:flex-row justify-between'>
            <div className='m-2'>
              <div className='flex flex-col space-y-10'>
          <h1 className='font-bold text-2xl md:text-3xl text-center mb-4'>CONTACT US!</h1>
                <div className='flex space-x-6 items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_499_1879)">
                      <path
                        d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z"
                        fill="#000100"
                      />
                      <path
                        d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z"
                        fill="#000100"
                      />
                      <path
                        d="M39.6937 11.1844C39.6937 12.7782 38.4 14.0625 36.8156 14.0625C35.2219 14.0625 33.9375 12.7688 33.9375 11.1844C33.9375 9.59065 35.2313 8.30627 36.8156 8.30627C38.4 8.30627 39.6937 9.60003 39.6937 11.1844Z"
                        fill="#000100"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_499_1879">
                        <rect width="48" height="48" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>instagram.com/snacksphere</p>
                </div>

                <div className='flex space-x-6 items-center'>
                  <img
                    className='w-[50px]'
                    src={mail}
                    alt="Email"
                  />
                  <p>help@snacksphere.us</p>
                </div>

                <div className='flex space-x-6 items-center'>
                  <img
                    className='w-[50px]'
                    src={phone}
                    alt="Phone"
                  />
                  <p>651-111-1111</p>
                </div>
              </div>
            </div>


                {/* contact form */}
            <div className='m-2 mt-10 md:mt-0'>
              <p className='mb-4 text-center md:text-left'>Questions or concerns? Fill out the form below.</p>

              <div className="flex flex-col mb-4">
                <label className="mb-2 font-semibold" htmlFor="name">Name</label>
                <div className=" border-2 border-black bg-white flex items-center">
                  <input
                    id="nameInput"
                    type="text"
                    className="w-full h-full bg-white outline-none px-2"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="mb-2 font-semibold" htmlFor="email">Email Address</label>
                <div className="border-2 border-black bg-white flex items-center">
                  <input
                    id="emailInput"
                    type="email"
                    className="w-full h-full bg-white outline-none px-2"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="select-dropdown" className="mb-2 text-black font-medium">Category</label>
                <div className="relative border-2 border-black bg-white flex items-center">
                  <select
                    id="select-dropdown"
                    className="w-full h-full bg-white outline-none px-2 appearance-none"
                  >
                    <option value="" disabled selected></option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                  <div className="absolute right-2 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                    >
                      <rect
                        width="18"
                        height="21.1375"
                        transform="matrix(-1 0 0 -1 18 21.9886)"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 16.7042L3.75 6.13549L14.25 6.13549L9 16.7042Z"
                        fill="#1D1B20"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="custom-textarea" className="my-4 text-black font-medium">Tell us about it...</label>
                <textarea
                  id="custom-textarea"
                  placeholder="Message"
                  className="h-40 flex-shrink-0 border-2 border-black bg-white p-2 outline-none resize-none"
                ></textarea>
              </div>

              <div className='flex justify-end mt-4'>
                <button className="inline-flex px-4 py-3 justify-center items-center gap-2.5 rounded-lg border-2 border-[#AFB1B6] bg-white">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
