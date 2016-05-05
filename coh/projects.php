<?php 
session_start();

    $data = array();
    $errors = array(); 
    echo '<link rel="stylesheet" type="text/css" href="css/bootstrap.min.form.css"></head>';
    function generateFormToken($form) {
    
        // generate a token from an unique value, took from microtime, you can also use salt-values, other crypting methods...
      $token = md5(uniqid(microtime(), true));  
      
      // Write the generated token to the session variable to check it against the hidden field when the form is sent
      $_SESSION[$form.'_token'] = $token; 
      return $token;
    }
    
    function verifyFormToken($form) {
        
        // check if a session is started and a token is transmitted, if not return an error
      if(!isset($_SESSION[$form.'_token'])) { 
        return false;
        }
      
      // check if the form is sent with token in it
      if(!isset($_POST['token'])) {
        return false;
        }
      
      // compare the tokens against each other if they are still the same
      if ($_SESSION[$form.'_token'] !== $_POST['token']) {
        return false;
        }
      return true;
    }
    function check_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
      }
   if (isset($_POST['submit']))

    { 
    if (verifyFormToken('form1')) {
      $name = check_input($_POST["name"]);
        $email = check_input($_POST["emailaddress"]);
        $message = check_input($_POST["message"]);
        $ForwardTo = 'nathan.bateman.jr@gmail.com';
        $details='Name: '.$name."\n".'Email: '.$email."\n".'Message: '.$message."\n";

        $data['success'] = true;
        $data['message'] = 'Success!';
        mail($ForwardTo,"Construction of Hope Contact",$details,"From:$email");
        
    } else {
    
      $data['success'] = false;
        $data['errors']  = $errors;
        
    }
    exit('
      <body>

    <div class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content" style="top:4em">
      <div class="modal-header">
        <h4 class="modal-title" style="border-top:none; border-bottom:none; Color:#003D7A">Thanks for writing in!</h4>
      </div>
      <div class="modal-body">
        <p>Someone will get back to you within 24 hrs.<br><br> Blessings!<br><br>Construction of Hope Team </p>
      </div>
      <div class="modal-footer">
<form action="index.php" style="text-align:left">
    <button type="submit" class="btn btn-primary">Back to site</button>
</form>

      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
</body>
      <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>'
);
    }

?>

<!doctype html>
<html lang='en'>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="IE=EDGE">
  <!-- Latest compiled and minified CSS -->
  <link rel="shortcut icon" href="http://cdn.sstatic.net/stackoverflow/img/favicon.ico">
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/main.css">
  <link href="http://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet" type="text/css">
  <title>COHProjects</title>
</head>
<?php
   // generate a new token for the $_SESSION superglobal and put them in a hidden field
  $newToken = generateFormToken('form1');  
?>
<body id="#body">
  <!--container div required by bootstrap-->
  <div class='sitewrapper'>
      <div id='container' class="container-fluid">
        
        <nav id='drawer' class='comeout'>
        </nav>
 <div class='header-wrapper'>
      <div id='COH' class='row'>
        
        <div class="col-sm-12">
          <div class='col-sm-6 padding-right-off pull-left'>
            <h3 data-bind="if: regscreen" class='text-left cohfont'><a href="index.php">Construction of Hope</a> </h3>
            <h3 data-bind="ifnot: regscreen" class='text-left cohfont-abbr'>COH </h3>
          </div>
  <!--end of 1st col 6 div-->
          <div id='hammy' class='col-sm-2 pull-right'>
            <a id='menu' class="hammy glyphicon glyphicon-menu-hamburger pull-right">
            </a>    
          </div>
          <div id='big-menu' class='col-sm-6 pull-right'>
            <ul class='main-menu-big'>
            </ul>
          </div>
    <!--end of 2nd col 6 div-->
      </div>
      <!--end of col 12 div-->

    </div>
    <!--end of 1st row-->
  <div id='IPWITH' class='row'>
      <div class='col-sm-12'> 
        <div class='col-sm-2 padding-right-off pull-left upsome'>
          <h6 class='text-right ipwith font-roboto-light-heading'>IN PARTNERSHIP WITH</h6>
        </div>
        <div class='col-sm-10 pull-left padding-left-off upsome'>
          <img src="images/lifesongSharp.png" class='pull-left img-responsive'>
        </div>    
      </div>
    <!--end col 12 div-->
  </div>  
  <!--end 2nd row-->
  </div>
    <!-- End of header wrapper --> 
    <!--end 2nd row-->
    <div id='bannerplace' class='row'>
      <div class='col-sm-12 banner'>
        <div data-bind="if: documentReady, visible: show" class='center-fly-other'>
          <h2><span class="font-roboto-light"> Striving for</span><span> Service</span><span class="font-roboto-light"> to please the Father</span></h2>
        </div>
        <div class='after border'>
        </div>
      </div>
    </div>
    <!--end of row 3-->
    <div id='mission' class='row'>
      <div class='mission-wrapper'>
        <div id='wrapper' class="col-sm-12 center content-bg">
          <h2 class='text-center font-roboto-bold page-title'>PROJECTS</h2>
          <span class='format-options'>
            <h3 data-bind="click:changeTwo, css:{ formatOptionsToggle: twoActive()}" class='text-center font-roboto' style="cursor:pointer;">Cambodia</h3>
            <h3 data-bind="click:changeOne, css:{ formatOptionsToggle: oneActive()}" class='text-center font-roboto' style="cursor:pointer;">Thailand</h3>
            <!-- <h3 data-bind="click:changeThree, css:{ formatOptionsToggle: threeActive()}" class='text-center font-roboto' style="cursor:pointer;">Takeo</h3> -->
          </span>
          <hr>
     <div data-bind="if: oneActive,fadeVisible: oneActive" class='center thailand-projects'>
            <div class='row'>
              <div class='col-sm-12 images-bkk'>
                <div class='col-sm-4'>
                  <span data-toggle="modal" data-target="#ministry" data-title="Making Connections" data-img="images/locatingAndConnectingBig.jpg" data-linkone="news.php" data-linkonetitle="Latest News" data-captionone="Our ministry in Bangkok begins with locating and connecting with children and families in need. While our focus is on helping migrant workers living on construction sites, the ministry has grown to include children and families from other areas as well, including refugees, factory workers and children living in slum communities. Due to trafficking, exploitation, and other issues, migrant workers are usually wary of outsiders, particularly foreigners. Once a relationship is formed, however, we are able to gain inside traction to multiple sites as families move from place to place. Additionally, a primary emphasis with Construction of Hope is to work through indigenous leaders as much as possible, which automatically helps eliminate some of the natural barriers to building relationships. " data-captiontwo="" data-captionthree="">
                    <img class='img-responsive' src="images/locatingAndConnectingSmall.jpg">
                    <h4>Making Connections</h4>
                  </span>
                </div>
                <div class='col-sm-4'>
                  <span data-toggle="modal" data-target="#ministry" data-title="Community Education" data-img="images/communityEducationBig.jpg" data-linkone="donate.php" data-linkonetitle="Support Education" data-captionone="In October 2014, Pastor Vino started a learning center at his church for the children of migrant construction workers. Beginning with 4 Cambodian children, the school now includes children from Cambodia, Myanmar, and Pakistan. Currently, an average of 25 children come daily to the church from 8:30-4:30 to learn a variety of subjects including Thai language, Bible, math, physical education and life skills. Every couple of months, the church takes the children on a field trip, such as the beach or the park. On Saturdays, an English class is led by a group of American missionaries and teachers.  A very practical way to support this work is through donations to purchase educational resources. We would love to hear from you if you are interested in partnering with us in this way. Click the below to donate to this cause." data-captiontwo="" data-captionthree="">
                    <img class='img-responsive' src="images/communityEducationSmall.jpg">
                    <h4>Community Education</h4>
                  </span>
                </div>
                <div class='col-sm-4'>
                  <span data-toggle="modal" data-target="#ministry" data-title="Leadership Training" data-img="images/leadershipTrainingBig.jpg" data-linkone="news.php" data-linkonetitle="Latest News" data-captionone="An extension of the school, Pastor Vino has begun a leadership program with a group of the older children to train and disciple them to take initiative and responsibility in helping others. This group of young leaders are given specific responsibilities and opportunities within the church and school, including helping teach the younger children, financial management training, and joining the adult leaders in various outreach ministries and weekend retreats. " data-captiontwo='' data-captionthree=''>
                    <img class='img-responsive' src="images/leadershipTrainingSmall.jpg">
                    <h4>Leadership Training</h4>
                  </span>
                </div>
              </div>
            </div>
            <div class='row'>
              <div class='col-sm-12 images-bkk'>
                <div class='col-sm-4'>
                  <span data-toggle="modal" data-target="#ministry" data-title="Indigenous Outreach" data-img="images/indigenousOutreachBig.jpg" data-linkone="news.php" data-linkonetitle="Latest News" data-captionone="Pastor Vino and his team are involved in a number of outreach activities that serve the families of the children in the school and other adults in the community. Activities include offering Thai language classes on construction sites after working hours, occasional serving meals on construction sites, leading worship services on sites as well as regular worship services and meals held at the church with times that accommodate the majority of the workers. Parents are also welcomed and encouraged to attend the bi-monthly day trips the children take to the beach or park. " data-captiontwo="" data-captionthree=''>
                    <img class='img-responsive' src="images/indigenousOutreachSmall.jpg">
                    <h4>Indigenous Outreach</h4>
                  </span>
                </div>
              </div>
            </div>
          </div>
     <div data-bind="if: twoActive,fadeVisible: twoActive" class='center cambodia-projects'>
            <div class='row'>
              <div class='col-sm-12'>
                <ul class='sub-menu'>
                  <li data-bind="click:changeSubOne, css:{ subFormatOptionsToggle: subOneActive() && !subAllActive()}" class='sub-menu-item'><h6>Phnom Penh</h6></li>
                  <li data-bind="click:changeSubAll, css:{ subFormatOptionsToggle: subAllActive()}" class='sub-menu-item'><h6>All</h6></li>
                  <li data-bind="click:changeSubTwo, css:{ subFormatOptionsToggle: subTwoActive() && !subAllActive()}" class='sub-menu-item'><h6>Takeo</h6></li>
                </ul>
              </div>
            </div>
            <div data-bind="fadeVisible: subOneActive" class='row phenom-penh'>
              <div class='col-sm-12 images-pp'>
                <div class='col-sm-4'>
                  <span data-toggle="modal" data-target="#ministry" data-title="Caring for Children" data-img="images/childrenLivingAtTheChurchBig.jpg" data-linkone='sponsor.php' data-linkonetitle='Sponsor a Child' data-linktwo='about.php' data-linktwotitle='COH Vision' data-captionone="Some of the children we come in contact with on construction sites and slum communities have no parents or close relatives to look after them or are victims of neglect or abuse. In certain cases, we believe the most viable solution is to help find a new home for these children. Through partnering with Pastor Somnang and The Fellowship Church of Pochentong in Phnom Penh, Cambodia, Construction of Hope currently helps support eight children who have been adopted into the church as part of the Pastor’s family. Click the link at the bottom to learn more about each child and their story. " data-captiontwo="Our main focus in sponsoring the care of these children is to not only provide for their physical needs of shelter, proper nutrition, clothing, and education but to also emphasize the discipleship of each child to equip them to become leaders that will one day transform their communities through bringing the Gospel message of hope back to their towns and villages. We believe that this hope is the key to breaking the chains of generational bondage that manifests itself in poverty and destructive life choices." data-captionthree="God willing, we hope to expand the foster care and adoption program by soon building additional accommodations – a bigger place in Phnom Penh and a new place in Takeo Province.">
                    <img class='img-responsive' src="images/childrenLivingAtTheChurchSmall.jpg">
                    <h4>Caring for Children</h4>
                  </span>
                </div>
                <div class='col-sm-4'>
                  <span data-toggle="modal" data-target="#ministry" data-title="Sustainable Business" data-img="images/sustainableBusinessBig.jpg" data-linkone='' data-linkonetitle='Emunah Project' data-captionone="The sustainable businesses promoted and established through Construction of Hope are part of an entrepreneurial project called ‘EMUNAH’. Currently, EMUNAH and Construction of Hope have helped establish five small businesses, including a restaurant, second-hand clothing store, sewing shop, private music instruction and a Tuk Tuk rental. Read more about the meaning and vision behind the name ‘EMUNAH’ by following the link at the below." data-captiontwo='' data-captionthree=''>
                    <img class='img-responsive' src="images/sustainableBusinessSmall.jpg">
                    <h4>Sustainable Business</h4>
                  </span>
                </div>
                <div class='col-sm-4'>
                  <span data-toggle="modal" data-target="#ministry" data-title="Local Outreach" data-img="images/outreachToLocalCommunitiesBig.jpg" data-linkone='news.php' data-linkonetitle='Latest News' data-captionone="Located in the area just behind the church in Phnom Penh is a large slum community filled with children. One of the children living in the church, Li Hou, used to beg on the streets of this neighborhood before being rescued and eventually adopted. The needs of the individual children in this community vary from those similar to Li Hou’s former situation to those who simply undergo a daily struggle through poverty and perceived hopelessness while living with their parents, many of whom struggle to find sustainable employment." data-captiontwo='Construction of Hope partners with Pastor Somnang and The Fellowship Church of Pochentong to help this community in a variety of ways, including providing food vouchers (redeemable at the EMUNAH restaurant) for those most in need, bags of rice for families, school supplies for children, support for some children who are unable to afford school fees, community soccer games and mentoring and discipleship in the church. For many of the children in this community, the church has become a place of refuge and relief. See the latest news about helping these communities by following the link below.' data-captionthree=''>
                    <img class='img-responsive' src="images/outreachToLocalCommunitiesSmall.jpg">
                    <h4>Local Outreach</h4>
                  </span>
                </div>
              </div>
            </div> 
            <div data-bind="fadeVisible: subTwoActive" class='row takeo'>
              <div class='col-sm-12 images-pp'>
                <div class='col-sm-4'>
                  <span data-toggle="modal" data-target="#ministry" data-title="Children Living at the Church" data-img="http://placehold.it/500X250" data-captionone="Well I went to the phone apple makin business bangkok adverbs no wup superficially." data-captiontwo="" data-captionthree="">
                    <img class='img-responsive' src="http://placehold.it/195x250">
                    <h4>Takeo Projects</h4>
                  </span>
                </div>
                <div class='col-sm-4'>
                  <span data-toggle="modal" data-target="#ministry" data-title="Sustainable Business" data-img="http://placehold.it/500X250" data-caption="Well I went to the phone apple makin business bangkok adverbs no wup superficially.">
                    <img class='img-responsive' src="http://placehold.it/195x250">
                    <h4>Takeo Projects</h4>
                  </span>
                </div>
                <div class='col-sm-4'>
                  <span data-toggle="modal" data-target="#ministry" data-title="Outreach to Local Children" data-img="http://placehold.it/500X250" data-caption="Well I went to the phone apple makin business bangkok adverbs no wup superficially.">
                    <img class='img-responsive' src="http://placehold.it/195x250">
                    <h4>Takeo Projects</h4>
                  </span>
                </div>
              </div>
            </div> 
          </div>
      </div>
        <h2 class="text-center scripture">
          <span class='text'>To loose the bonds of injustice...to let the oppressed go free<span> <br><span class='isaiah'>-Isaiah 58:6-</span>
        </h2>
      </div>
    </div>  
    <!--end of row 4-->
         <!-- donate section -->
  <div id='donate-section' class='row'>
    <div class='col-sm-12 donate-wrap'>
      <div class='donate-wrap'>
      <a href="donate.php"><button type="button" class="btn btn-primary font-roboto-light btn-donate">DONATE</button></a>
    </div>
    </div>
  </div>
    <div id='links' class='row'>
      <div class='col-sm-12 bottompics'>
      </div>
    </div>
    <!--end of row 5-->
    <!--Inspiration and some markup for contact form modified from Light Up the Dark LLC Belton, MO-->
    <div id='contact'>
      <div class='contact-wrapper'>
      <h3 class='text-left font-roboto-bold contact-format'>Let's Connect</h3>
      <!--Markup for Contact form-->
        <form action='index.php' method='post' class='contact-format'>
          <div class="form-group row">
            <div class='fields col-sm-4'>
              <p>
                  <input type="text" class="form-control input-height" name='name' placeholder="Name" required>
              </p>
                  <br>
              <p>
                  <input type="email" class="form-control input-height" name='emailaddress' placeholder="Email" required>
              </p>
                  <br>
            </div>
            <div class='col-sm-4 text-submit'>
                <textarea class='center' cols='53' rows='10' name='message' placeholder="What's on your mind?"></textarea>
              <p>
                  <input type="hidden" name="token" value="<?php echo $newToken; ?>"></p>
              <p>
                  <button type="submit" name='submit' class="btn btn-primary button send">Send</button>
              </p>
            </div>
            <div class='col-sm-4 phone-address'>
                <h4>Phone</h4>
              <p>
                  USA - (555)-121-5555
                  <br>
                  THA - (555)-121-5555
                  <br>
                  KHB - (555)-121-5555
              </p>
                <h4>Location</h4>
              <p>
                  34509 BassFish Road
                  <br>
                  Topwater Jig, MO
                  <br>
                  44567
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!--end of row 6-->

    <footer id='footer' class="row">
    <ul id="footerContacts" class="flex-box ulgeneral">
        </ul>
    </footer>
    <!--end of row 7-->

      </div>
      <!--end container-->
        <div class="modal fade modal-projects" id="ministry" tabindex="-1" role="dialog" aria-labelledby="mi" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-parent">
                  <span><h5>Construction of Hope</h5></span>
                  <span><a id='close' class="modal-close glyphicon glyphicon-remove pull-right" data-dismiss="modal"></a></span>
                </div>
              </div>
              <div class="modal-body">
                <img class='img-responsive' src="images/lifesong.png"><br>
                <p class='caption1'></p>
                <p class='caption2'></p>
                <p class='caption3'></p>
                <div class='link-wrapper'>
                  <a class='link1' href=''><h5></h5></a>
              </div>
              </div>
              <div class="modal-footer">
                <h4 class="modal-title" id="mi"></h4>
              </div>
            </div>
          </div>
        </div>
     <div id="c-mask" class="c-mask"></div><!-- /c-mask
    <!--site wrapper close div-->
  </div>
</div>
</body>
<script src='js/knockout-3.3.0.js'></script>
<script src='js/jQuery.js'></script>
<!-- <script src='js/bootstrap.min.js'></script> -->
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
<!--<script src='js/bootstrap.js'></script>-->
<script src='js/main.js'></script>


</html>