<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Timer
{
    public function __construct()
    {
        require_once APPPATH.'third_party/php-timer/Exception.php';
        require_once APPPATH.'third_party/php-timer/RuntimeException.php';
        require_once APPPATH.'third_party/php-timer/Timer.php';
    }
}
