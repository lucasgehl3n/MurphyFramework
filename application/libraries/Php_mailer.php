<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once APPPATH.'third_party/phpmailer/src/Exception.php';
require_once APPPATH.'third_party/phpmailer/src/OAuth.php';
require_once APPPATH.'third_party/phpmailer/src/PHPMailer.php';
require_once APPPATH.'third_party/phpmailer/src/POP3.php';
require_once APPPATH.'third_party/phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class Php_mailer
{
    public function __construct()
    {
      $mail = new PHPMailer(true);

  		$CI =& get_instance();
  		$CI->phpmailer = $mail;
    }
}
