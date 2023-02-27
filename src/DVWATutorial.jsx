import React from "react";

const DVWATutorial = () => {
  return (
    <div>
      <h1>How to Run DVWA for the First Time</h1>
      <p>
        DVWA (Damn Vulnerable Web Application) is a web application that is intentionally
        vulnerable to various web attacks. It is commonly used as a training tool for
        learning how to identify and exploit common web vulnerabilities. In this tutorial,
        we'll walk through the steps of setting up and running DVWA on your local machine.
      </p>
      <h2>Step 1: Download DVWA</h2>
      <p>
        The first step in running DVWA is to download the application. You can do this by
        visiting the DVWA GitHub page (<a href="https://github.com/ethicalhack3r/DVWA">https://github.com/ethicalhack3r/DVWA</a>)
        and clicking the "Download" button. Once the download is complete, extract the contents
        of the zip file to a directory on your local machine.
      </p>
      <h2>Step 2: Set up the Environment</h2>
      <p>
        After downloading DVWA, you'll need to set up a local environment to run the application.
        DVWA requires a web server, PHP, and a database. One easy way to set up this environment
        is to use a preconfigured virtual machine, such as <a href="https://www.virtualbox.org/">VirtualBox</a>
        with <a href="https://www.kali.org/">Kali Linux</a> or <a href="https://www.pentestbox.org/">PentestBox</a>.
        These virtual machines come with all the necessary software preinstalled and configured.
      </p>
      <h2>Step 3: Configure DVWA</h2>
      <p>
        Once you have set up your local environment, navigate to the directory where you extracted
        DVWA and locate the file named <code>config/config.inc.php.dist</code>. Rename this file to
        <code>config/config.inc.php</code>. Then, open the <code>config/config.inc.php</code> file in
        a text editor and update the database settings to match your local environment.
      </p>
      <h2>Step 4: Run DVWA</h2>
      <p>
        To run DVWA, start your web server and navigate to the DVWA directory in your web browser.
        You should see a login page. The default username and password are <code>admin</code> and
        <code>password</code>, respectively. After logging in, you can start exploring the various
        vulnerabilities in DVWA and practicing your web exploitation skills!
      </p>
      <h2>Conclusion</h2>
      <p>
        Running DVWA for the first time can seem daunting, but by following these steps, you should
        be up and running in no time. Remember to always use DVWA in a safe and responsible manner,
        and never use it to attack any system or network that you do not have explicit permission to
        test. Happy hacking!
      </p>
    </div>
  );
};

export default DVWATutorial;
