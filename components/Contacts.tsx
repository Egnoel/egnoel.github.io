import React from 'react';
import { GrDocumentPdf } from 'react-icons/gr';
import { BsEnvelopeAt } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

const Contacts = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__content">
          <div className="contact__title">
            <p>contact</p>
            <h3>Thank you for visiting my portfolio </h3>
          </div>
          <div className="contact__icons">
            <div className="contact__icon-box">
              <span>
                <GrDocumentPdf className="w-10 h-10" />
              </span>
              <div className="contact__info">
                <h3>Resume</h3>
                <a
                  href="/assets/Egnoel_-_Software_Engineer.pdf"
                  download="Egnoel_-_Software_Engineer.pdf"
                >
                  <p>Download</p>
                </a>
              </div>
            </div>
            <div className="contact__icon-box">
              <span>
                <BsEnvelopeAt className="w-10 h-10" />
              </span>
              <div className="contact__info">
                <h3>Mail</h3>
                <a href="mailto:egnoel@hotmail.com">egnoel@hotmail.com</a>
              </div>
            </div>
            <div className="contact__icon-box">
              <span>
                <Link href="https://github.com/Egnoel" target="_blank">
                  <Image
                    src="/github.svg"
                    alt="github"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </Link>
              </span>
            </div>
            <div className="contact__icon-box">
              <span>
                <Link
                  href="https://www.linkedin.com/in/egnoel-neto/"
                  target="_blank"
                >
                  <Image
                    src="/linkedin.png"
                    alt="Linkedin"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
