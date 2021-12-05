$(document).ready(function(){
  $("#logo_sec").html("<a href='https://ariesean.com'><section><div class='content'><canvas height='28px' width='193px' id='ariesean_logo'></canvas><div class='desc'>Never Stop Traveling</div></div></section></a>");
  $test = setInterval(function(){ drawArieSean(2, 2); }, 25);
  $x = 1;
  $rgb = 255;
  $opacity = 1;

  var ctx = $('#ariesean_logo')[0].getContext("2d");

  function drawArieSean($startCoordX, $startCoordY){
    ctx.beginPath();
    switch($x){
      /* start A */
      case 1:
        ctx.rect($startCoordX, $startCoordY+20, 4, 4);
        break;
      case 2:
        ctx.rect($startCoordX, $startCoordY+15, 4, 4);
        break;
      case 3:
        ctx.rect($startCoordX, $startCoordY+10, 4, 4);
        break;
      case 4:
        ctx.rect($startCoordX, $startCoordY+5, 4, 4);
        break;
      case 5:
        ctx.rect($startCoordX+5, $startCoordY, 4, 4);
        break;
      case 6:
        ctx.rect($startCoordX+10, $startCoordY, 4, 4);
        break;
      case 7:
        ctx.rect($startCoordX+15, $startCoordY+5, 4, 4);
        break;
      case 8:
        ctx.rect($startCoordX+15, $startCoordY+10, 4, 4);
        break;
      case 9:
        ctx.rect($startCoordX+15, $startCoordY+15, 4, 4);
        break;
      case 10:
        ctx.rect($startCoordX+15, $startCoordY+20, 4, 4);
        break;
      case 11:
        ctx.rect($startCoordX+15, $startCoordY+20, 4, 4);
        break;
      case 12:
        ctx.rect($startCoordX+5, $startCoordY+10, 4, 4);
        break;
      case 13:
        ctx.rect($startCoordX+10, $startCoordY+10, 4, 4);
        break;
      /* end A */

      /* start R */
      case 14:
        ctx.rect($startCoordX+25, $startCoordY+20, 4, 4);
        break;
      case 15:
        ctx.rect($startCoordX+25, $startCoordY+15, 4, 4);
        break;
      case 16:
        ctx.rect($startCoordX+25, $startCoordY+10, 4, 4);
        break;
      case 17:
        ctx.rect($startCoordX+25, $startCoordY+5, 4, 4);
        break;
      case 18:
        ctx.rect($startCoordX+25, $startCoordY, 4, 4);
        break;
      case 19:
        ctx.rect($startCoordX+30, $startCoordY, 4, 4);
        break;
      case 20:
        ctx.rect($startCoordX+35, $startCoordY, 4, 4);
        break;
      case 21:
        ctx.rect($startCoordX+40, $startCoordY+5, 4, 4);
        break;
      case 22:
        ctx.rect($startCoordX+40, $startCoordY+10, 4, 4);
        break;
      case 23:
        ctx.rect($startCoordX+35, $startCoordY+10, 4, 4);
        break;
      case 24:
        ctx.rect($startCoordX+30, $startCoordY+10, 4, 4);
        break;
      case 25:
        ctx.rect($startCoordX+35, $startCoordY+15, 4, 4);
        break;
      case 26:
        ctx.rect($startCoordX+40, $startCoordY+20, 4, 4);
        break;
      /* end R */

      /* start I */
      case 27:
        ctx.rect($startCoordX+50, $startCoordY, 4, 4);
        break;
      case 28:
        ctx.rect($startCoordX+55, $startCoordY, 4, 4);
        break;
      case 29:
        ctx.rect($startCoordX+60, $startCoordY, 4, 4);
        break;
      case 30:
        ctx.rect($startCoordX+55, $startCoordY+5, 4, 4);
        break;
      case 31:
        ctx.rect($startCoordX+55, $startCoordY+10, 4, 4);
        break;
      case 32:
        ctx.rect($startCoordX+55, $startCoordY+15, 4, 4);
        break;
      case 33:
        ctx.rect($startCoordX+50, $startCoordY+20, 4, 4);
        break;
      case 34:
        ctx.rect($startCoordX+55, $startCoordY+20, 4, 4);
        break;
      case 35:
        ctx.rect($startCoordX+60, $startCoordY+20, 4, 4);
        break;
      /* end I */

      /* start E */
      case 36:
        ctx.rect($startCoordX+70, $startCoordY, 4, 4);
        break;
      case 37:
        ctx.rect($startCoordX+75, $startCoordY, 4, 4);
        break;
      case 38:
        ctx.rect($startCoordX+80, $startCoordY, 4, 4);
        break;
      case 39:
        ctx.rect($startCoordX+85, $startCoordY, 4, 4);
        break;
      case 40:
        ctx.rect($startCoordX+70, $startCoordY+5, 4, 4);
        break;
      case 41:
        ctx.rect($startCoordX+70, $startCoordY+10, 4, 4);
        break;
      case 42:
        ctx.rect($startCoordX+70, $startCoordY+15, 4, 4);
        break;
      case 43:
        ctx.rect($startCoordX+70, $startCoordY+20, 4, 4);
        break;
      case 44:
        ctx.rect($startCoordX+75, $startCoordY+10, 4, 4);
        break;
      case 45:
        ctx.rect($startCoordX+80, $startCoordY+10, 4, 4);
        break;
      case 46:
        ctx.rect($startCoordX+85, $startCoordY+10, 4, 4);
        break;
      case 47:
        ctx.rect($startCoordX+75, $startCoordY+20, 4, 4);
        break;
      case 48:
        ctx.rect($startCoordX+80, $startCoordY+20, 4, 4);
        break;
      case 49:
        ctx.rect($startCoordX+85, $startCoordY+20, 4, 4);
        break;
      /* end E */

      /* start S */
      case 50:
        ctx.rect($startCoordX+110, $startCoordY, 4, 4);
        break;
      case 51:
        ctx.rect($startCoordX+105, $startCoordY, 4, 4);
        break;
      case 52:
        ctx.rect($startCoordX+100, $startCoordY, 4, 4);
        break;
      case 53:
        ctx.rect($startCoordX+95, $startCoordY+5, 4, 4);
        break;
      case 54:
        ctx.rect($startCoordX+100, $startCoordY+10, 4, 4);
        break;
      case 55:
        ctx.rect($startCoordX+105, $startCoordY+10, 4, 4);
        break;
      case 56:
        ctx.rect($startCoordX+110, $startCoordY+15, 4, 4);
        break;
      case 57:
        ctx.rect($startCoordX+105, $startCoordY+20, 4, 4);
        break;
      case 58:
        ctx.rect($startCoordX+100, $startCoordY+20, 4, 4);
        break;
      case 59:
        ctx.rect($startCoordX+95, $startCoordY+20, 4, 4);
        break;
      /* end S */

      /* start E */
      case 60:
        ctx.rect($startCoordX+120, $startCoordY, 4, 4);
        break;
      case 61:
        ctx.rect($startCoordX+125, $startCoordY, 4, 4);
        break;
      case 62:
        ctx.rect($startCoordX+130, $startCoordY, 4, 4);
        break;
      case 63:
        ctx.rect($startCoordX+135, $startCoordY, 4, 4);
        break;
      case 64:
        ctx.rect($startCoordX+120, $startCoordY+5, 4, 4);
        break;
      case 65:
        ctx.rect($startCoordX+120, $startCoordY+10, 4, 4);
        break;
      case 66:
        ctx.rect($startCoordX+120, $startCoordY+15, 4, 4);
        break;
      case 67:
        ctx.rect($startCoordX+120, $startCoordY+20, 4, 4);
        break;
      case 68:
        ctx.rect($startCoordX+125, $startCoordY+10, 4, 4);
        break;
      case 69:
        ctx.rect($startCoordX+130, $startCoordY+10, 4, 4);
        break;
      case 70:
        ctx.rect($startCoordX+135, $startCoordY+10, 4, 4);
        break;
      case 71:
        ctx.rect($startCoordX+125, $startCoordY+20, 4, 4);
        break;
      case 72:
        ctx.rect($startCoordX+130, $startCoordY+20, 4, 4);
        break;
      case 73:
        ctx.rect($startCoordX+135, $startCoordY+20, 4, 4);
        break;
      /* end E */
    
      /* start A */
      case 74:
        ctx.rect($startCoordX+145, $startCoordY+20, 4, 4);
        break;
      case 75:
        ctx.rect($startCoordX+145, $startCoordY+15, 4, 4);
        break;
      case 76:
        ctx.rect($startCoordX+145, $startCoordY+10, 4, 4);
        break;
      case 77:
        ctx.rect($startCoordX+145, $startCoordY+5, 4, 4);
        break;
      case 78:
        ctx.rect($startCoordX+150, $startCoordY, 4, 4);
        break;
      case 79:
        ctx.rect($startCoordX+155, $startCoordY, 4, 4);
        break;
      case 80:
        ctx.rect($startCoordX+160, $startCoordY+5, 4, 4);
        break;
      case 81:
        ctx.rect($startCoordX+160, $startCoordY+10, 4, 4);
        break;
      case 82:
        ctx.rect($startCoordX+160, $startCoordY+15, 4, 4);
        break;
      case 83:
        ctx.rect($startCoordX+160, $startCoordY+20, 4, 4);
        break;
      case 84:
        ctx.rect($startCoordX+160, $startCoordY+20, 4, 4);
        break;
      case 85:
        ctx.rect($startCoordX+150, $startCoordY+10, 4, 4);
        break;
      case 86:
        ctx.rect($startCoordX+155, $startCoordY+10, 4, 4);
        break;
      /* end A */

      /* start N */
      case 87:
        ctx.rect($startCoordX+170, $startCoordY+20, 4, 4);
        break;
      case 88:
        ctx.rect($startCoordX+170, $startCoordY+15, 4, 4);
        break;
      case 89:
        ctx.rect($startCoordX+170, $startCoordY+10, 4, 4);
        break;
      case 90:
        ctx.rect($startCoordX+170, $startCoordY+5, 4, 4);
        break;
      case 91:
        ctx.rect($startCoordX+170, $startCoordY, 4, 4);
        break;
      case 92:
        ctx.rect($startCoordX+175, $startCoordY+5, 4, 4);
        break;
      case 93:
        ctx.rect($startCoordX+180, $startCoordY+10, 4, 4);
        break;
      case 94:
        ctx.rect($startCoordX+185, $startCoordY+20, 4, 4);
        break;
      case 95:
        ctx.rect($startCoordX+185, $startCoordY+15, 4, 4);
        break;
      case 96:
        ctx.rect($startCoordX+185, $startCoordY+10, 4, 4);
        break;
      case 97:
        ctx.rect($startCoordX+185, $startCoordY+5, 4, 4);
        break;
      case 98:
        ctx.rect($startCoordX+185, $startCoordY, 4, 4);
        break;
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba('+$rgb+','+$rgb+','+$rgb+','+$opacity+')';
    $opacity /= 1.00;
    ctx.fill();
    $x++;
    if ($x > 98){
      clearInterval($test);
    }
  }
});