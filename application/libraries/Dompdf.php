<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Dompdf
{
    public function __construct()
    {
        require_once APPPATH.'third_party/dompdf/autoload.inc.php';
    }
}
