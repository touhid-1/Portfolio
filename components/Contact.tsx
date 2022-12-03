import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({ }: Props) {
  const {
    register, handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:touhidsaleem1@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}. This is my email (${formData.email})`;
  };
  return (
    <div className="flex flex-col relative text-center h-screen justify-center md:text-left md:flex-row max-w-5xl mx-auto px-10 py-28 items-center"
    >
      <h3 className="absolute top-16 left-8 text-[#0891b2] text-2xl">{'<contact>'}</h3>

      <div className="text-xl font-semibold text-center md:w-[50%]">
        I have got just what you need.
        <span className="decoration-[#0891b2]/50 underline"> Let's Talk.</span>

        <div className="space-y-2 my-2">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#0891b2] h-5 w-5 animate-pulse" />
            <a href="tel:+918828166870" className="text-xl">+91 8828166870</a>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#0891b2] h-5 w-5 animate-pulse" />
            <a href="mailto:touhidsaleem1@gmail.com" className="text-xl">touhidsaleem1@gmail.com</a>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#0891b2] h-5 w-5 animate-pulse" />
            <p className="text-xl">Mumbai, India</p>
          </div>
        </div>
      </div>


      <div className="container md:w-[50%]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 ">
          <div className="flex space-x-2 max-w-full">
            <input {...register('name')} className="contactInput w-[50%]" placeholder="Name" type="text" />
            <input {...register('email')} className="contactInput w-[50%]" placeholder="Email" type="text" />
          </div>
          <input {...register('subject')} className="contactInput" placeholder="Subject" type="text" />

          <textarea {...register('message')} className="contactInput" placeholder="Message" />
          <button className="bg-[#0891b2] py-3 px-6 rounded-md text-black font-bold text-lg">Submit</button>
        </form>
      </div>

      <h3 className="absolute bottom-4 left-8 text-[#0891b2] text-2xl">{'</contact>'}</h3>

    </div>
  )
}

export default Contact