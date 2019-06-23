<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once APPPATH.'third_party/php-timer/Exception.php';
require_once APPPATH.'third_party/php-timer/RuntimeException.php';
require_once APPPATH.'third_party/php-timer/Timer.php';

use SebastianBergmann\Timer\Timer;

class Timer_php
{
    public function __construct()
    {
      $timer = new Timer();

  		$CI =& get_instance();
  		$CI->timer = $timer;
    }
}
