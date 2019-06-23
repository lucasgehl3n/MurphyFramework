<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Phpmailer
{
    public function __construct()
    {
        require_once APPPATH.'third_party/phpmailer/src/Exception.php';
        require_once APPPATH.'third_party/phpmailer/src/OAuth.php';
        require_once APPPATH.'third_party/phpmailer/src/PHPMailer.php';
        require_once APPPATH.'third_party/phpmailer/src/POP3.php';
        require_once APPPATH.'third_party/phpmailer/src/SMTP.php';
    }
}
