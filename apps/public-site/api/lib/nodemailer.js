import nodemailer from "nodemailer"

import {config} from "../../server-config.js"


/**
 * @typedef {Object} Info
 * @property {string} from
 * @property {string} to
 * @property {string} subject
 * @property {string} message 
 * 
 */

/**
 * 
 * @param {Info} info 
 */
export async function sendMail(info) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      port: 465,
      auth: {
        user: config.smtpEmail,
        pass: config.smtpPassword,
      },
    });
    await transporter.sendMail(info);
  }
