import React, { useState } from "react";
import "./assets/css/DVWATutorialCube.css";

function DVWATutorialCube() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((step) => (step === 6 ? 1 : step + 1));
  };

  const stepText = {
    1: (
      <>
        <h3>Step 1: Download DVWA</h3>
        <p>
          DVWA (Damn Vulnerable Web Application) is a web application that is
          intentionally vulnerable to various web attacks. It is commonly used
          as a training tool for learning how to identify and exploit common web
          vulnerabilities. In this tutorial, we'll walk through the steps of
          setting up and running DVWA on your local machine.
        </p>
        <p>
          Visit the DVWA GitHub page (
          <a href="https://github.com/ethicalhack3r/DVWA">
            https://github.com/ethicalhack3r/DVWA
          </a>
          ) and click the "Download" button. Once the download is complete,
          extract the contents of the zip file to a directory on your local
          machine.
        </p>
      </>
    ),
    2: (
      <>
        <h3>Step 2: Set up the Environment</h3>
        <p>
          DVWA requires a web server, PHP, and a database. One easy way to set
          up this environment is to use a preconfigured virtual machine, such as
          VirtualBox with Kali Linux or PentestBox. These virtual machines come
          with all the necessary software preinstalled and configured.
        </p>
        <p>
          If you prefer to set up the environment manually, you can install a
          web server (such as Apache), PHP, and a database (such as MySQL) on
          your local machine. Make sure to configure them properly before moving
          on to the next step.
        </p>
      </>
    ),
    3: (
      <>
        <h3>Step 3: Configure DVWA</h3>
        <p>
          Once you have set up your local environment, navigate to the directory
          where you extracted DVWA and locate the file named{" "}
          <code>config/config.inc.php.dist</code>. Rename this file to
          <code>config/config.inc.php</code>.
        </p>
        <p>
          Then, open the <code>config/config.inc.php</code> file in a text
          editor and update the database settings to match your local
          environment. Specifically, you'll need to update the following
          variables:
        </p>
        <ul>
          <li>
            <code>$_DVWA['db_user']</code>: The username for your database.
          </li>
          <li>
            <code>$_DVWA['db_password']</code>: The password for your database.
          </li>
          <li>
            <code>$_DVWA['db_database']</code>: The name of the database you'll
            be using for DVWA.
          </li>
          <li>
            <code>$_DVWA['db_server']</code>: The hostname or IP address of your
            database server.
          </li>
        </ul>
      </>
    ),
    4: (
      <>
        <h3>Step 4: Run DVWA</h3>
        <p>
          To run DVWA, start your web server and navigate to the DVWA directory
          in your web browser.
        </p>
        <p>
          If you're running DVWA on your local machine, the URL should be
          something like <code>http://localhost/dvwa</code>. If you're running
          it on a virtual machine or remote server, use the appropriate IP
          address or hostname.
        </p>
        <p>
          You should see the DVWA login screen. The default credentials are{" "}
          <code>admin</code> for the username and <code>password</code> for the
          password. Log in to DVWA to continue.
        </p>
      </>
    ),
    5: (
      <>
        <h3>Step 5: Explore DVWA</h3>
        <p>
          Once you've logged in to DVWA, you'll be presented with a menu of
          vulnerabilities to explore. These vulnerabilities are organized by
          difficulty level, ranging from low to impossible.
        </p>
        <p>
          Start by exploring the vulnerabilities marked "low" and work your way
          up to the more difficult ones. For each vulnerability, try to identify
          the vulnerability and exploit it. The goal is to understand how these
          vulnerabilities work so you can better defend against them in
          real-world applications.
        </p>
      </>
    ),
    6: (
      <>
        <h3>Step 6: Further Resources</h3>
        <p>
          Congratulations, you've successfully set up and run DVWA on your local
          machine! Now that you have a basic understanding of web
          vulnerabilities, it's time to dive deeper and learn more advanced
          techniques for identifying and exploiting vulnerabilities.
        </p>
        <p>
          Here are some resources to help you continue your learning journey:
        </p>
        <ul>
          <li>
            The OWASP Top Ten Project (
            <a href="https://owasp.org/Top10/">https://owasp.org/Top10/</a>) - a
            list of the top ten most critical web application security risks
          </li>
          <li>
            The Web Application Hacker's Handbook - a comprehensive guide to web
            application security
          </li>
          <li>
            The Metasploit Unleashed Tutorial (
            <a href="https://www.offensive-security.com/metasploit-unleashed/">
              https://www.offensive-security.com/metasploit-unleashed/
            </a>
            ) - a free online course on using the Metasploit Framework for
            penetration testing
          </li>
        </ul>
      </>
    ),
  };

  return (
    <div className="contenedor">
      <div className="cube-container">
        <div className={`cube show-${step}`}>
          <div className="side front">{stepText[1]}</div>
          <div className="side back">{stepText[2]}</div>
          <div className="side left">{stepText[3]}</div>
          <div className="side right">{stepText[4]}</div>
          <div className="side top">{stepText[5]}</div>
          <div className="side bottom">{stepText[6]}</div>
        </div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default DVWATutorialCube;
