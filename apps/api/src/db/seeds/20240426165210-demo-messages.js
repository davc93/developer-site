"use strict";
const { MESSAGE_TABLE } = require("../models/message.model");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    return queryInterface.bulkInsert(MESSAGE_TABLE, [
      {
        email: "pvass0@intel.com",
        organization: "Devpulse",
        message:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        created_at: "2024-04-06 19:15:19",
      },
      {
        email: "filtchev1@wp.com",
        organization: "Realcube",
        message:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        created_at: "2023-10-03 00:42:32",
      },
      {
        email: "ebattelle2@craigslist.org",
        organization: "Browsetype",
        message:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        created_at: "2024-03-12 03:56:06",
      },
      {
        email: "wbrittain3@dmoz.org",
        organization: "Brainsphere",
        message:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        created_at: "2023-11-29 18:37:53",
      },
      {
        email: "snevet4@nhs.uk",
        organization: "Skynoodle",
        message:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        created_at: "2023-07-22 14:23:28",
      },
      {
        email: "njaskiewicz5@360.cn",
        organization: "Twinder",
        message:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        created_at: "2024-04-02 14:40:02",
      },
      {
        email: "dchevers6@unc.edu",
        organization: "Browsezoom",
        message:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        created_at: "2023-09-05 17:01:53",
      },
      {
        email: "grome7@cloudflare.com",
        organization: "Tagtune",
        message:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        created_at: "2024-01-09 19:29:19",
      },
      {
        email: "rmacadam8@nba.com",
        organization: "Livepath",
        message:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        created_at: "2023-06-07 16:15:41",
      },
      {
        email: "gottey9@joomla.org",
        organization: "Skinix",
        message:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        created_at: "2024-03-26 06:25:06",
      },
      {
        email: "bpirniea@tinypic.com",
        organization: "Skilith",
        message:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        created_at: "2023-12-07 19:33:04",
      },
      {
        email: "gsinclarb@nature.com",
        organization: "Photobean",
        message: "Fusce consequat. Nulla nisl. Nunc nisl.",
        created_at: "2024-03-14 01:12:16",
      },
      {
        email: "emarlenc@typepad.com",
        organization: "Agivu",
        message:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        created_at: "2023-11-28 05:19:09",
      },
      {
        email: "xorteltd@360.cn",
        organization: "Bubblebox",
        message:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        created_at: "2023-06-28 00:48:57",
      },
      {
        email: "stilberrye@shutterfly.com",
        organization: "Jatri",
        message:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
        created_at: "2023-07-01 08:42:17",
      },
      {
        email: "fgeorgelf@sitemeter.com",
        organization: "Realpoint",
        message:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        created_at: "2024-04-06 07:59:28",
      },
      {
        email: "lmataning@mail.ru",
        organization: "Eimbee",
        message:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        created_at: "2023-05-19 16:14:42",
      },
      {
        email: "ereesh@vkontakte.ru",
        organization: "Tavu",
        message:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        created_at: "2024-01-19 04:02:17",
      },
      {
        email: "relloiti@mayoclinic.com",
        organization: "Oodoo",
        message:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        created_at: "2023-06-20 15:10:08",
      },
      {
        email: "cgerrensj@hp.com",
        organization: "Rhynoodle",
        message:
          "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        created_at: "2024-02-08 12:31:01",
      },
      {
        email: "cbrimilcombek@ezinearticles.com",
        organization: "Centimia",
        message:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        created_at: "2024-04-09 00:27:56",
      },
      {
        email: "fbehrl@yellowbook.com",
        organization: "Gigazoom",
        message:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        created_at: "2024-03-17 01:08:49",
      },
      {
        email: "oheighwaym@ebay.com",
        organization: "Bubblebox",
        message:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        created_at: "2023-05-08 05:29:55",
      },
      {
        email: "mbennelln@upenn.edu",
        organization: "Zava",
        message:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        created_at: "2023-10-14 20:48:09",
      },
      {
        email: "voldroydo@adobe.com",
        organization: "Jabbertype",
        message:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        created_at: "2023-11-27 20:58:48",
      },
      {
        email: "mbleadenp@jalbum.net",
        organization: "Skidoo",
        message:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        created_at: "2023-11-03 09:56:22",
      },
      {
        email: "teliassonq@nhs.uk",
        organization: "Lajo",
        message:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        created_at: "2023-10-29 09:21:06",
      },
      {
        email: "hgilbeyr@w3.org",
        organization: "Twimbo",
        message:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        created_at: "2023-10-10 22:36:46",
      },
      {
        email: "abellons@t.co",
        organization: "Oyondu",
        message:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        created_at: "2023-10-15 07:17:09",
      },
      {
        email: "abortolomeit@privacy.gov.au",
        organization: "Riffpath",
        message:
          "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        created_at: "2024-01-28 08:56:24",
      },
      {
        email: "bcolquyteu@sbwire.com",
        organization: "Babbleset",
        message:
          "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        created_at: "2023-04-27 01:19:34",
      },
      {
        email: "rhemphreyv@nyu.edu",
        organization: "Jaxworks",
        message:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        created_at: "2023-05-27 04:59:31",
      },
      {
        email: "cbelfordw@un.org",
        organization: "Devcast",
        message:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        created_at: "2024-01-30 11:05:30",
      },
      {
        email: "cmusickax@virginia.edu",
        organization: "Jaloo",
        message:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        created_at: "2024-03-16 05:57:18",
      },
      {
        email: "efishbourney@blinklist.com",
        organization: "Demivee",
        message:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        created_at: "2024-03-12 09:33:01",
      },
      {
        email: "msazioz@aboutads.info",
        organization: "Leexo",
        message:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        created_at: "2023-09-04 06:03:10",
      },
      {
        email: "glodevick10@xing.com",
        organization: "Mybuzz",
        message:
          "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
        created_at: "2023-10-06 22:52:28",
      },
      {
        email: "pcockburn11@linkedin.com",
        organization: "Mybuzz",
        message:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        created_at: "2023-12-29 01:07:26",
      },
      {
        email: "csharphouse12@digg.com",
        organization: "Flashset",
        message:
          "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        created_at: "2024-04-25 05:01:35",
      },
      {
        email: "rfredi13@forbes.com",
        organization: "Photobug",
        message:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        created_at: "2023-07-16 04:08:07",
      },
      {
        email: "landrioni14@vkontakte.ru",
        organization: "LiveZ",
        message:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        created_at: "2023-10-07 06:23:01",
      },
      {
        email: "acarswell15@nationalgeographic.com",
        organization: "Yadel",
        message:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        created_at: "2023-10-14 12:42:12",
      },
      {
        email: "apaulino16@auda.org.au",
        organization: "Blogpad",
        message:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        created_at: "2023-05-25 14:57:58",
      },
      {
        email: "bdowzell17@elpais.com",
        organization: "Tagcat",
        message:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        created_at: "2024-01-12 08:31:35",
      },
      {
        email: "swarboy18@bluehost.com",
        organization: "Realbridge",
        message:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        created_at: "2024-01-06 10:27:03",
      },
      {
        email: "pchalke19@omniture.com",
        organization: "Jaxnation",
        message:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        created_at: "2023-05-26 19:05:11",
      },
      {
        email: "cguidone1a@hud.gov",
        organization: "Jaloo",
        message:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        created_at: "2023-08-18 07:01:06",
      },
      {
        email: "afolkerts1b@bluehost.com",
        organization: "Mydo",
        message:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        created_at: "2024-01-13 22:52:16",
      },
      {
        email: "ucosterd1c@npr.org",
        organization: "Youbridge",
        message:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        created_at: "2023-12-03 10:04:39",
      },
      {
        email: "lhold1d@cafepress.com",
        organization: "Trilia",
        message:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        created_at: "2024-04-03 19:55:53",
      },
      {
        email: "akingzeth1e@squarespace.com",
        organization: "Innotype",
        message: "In congue. Etiam justo. Etiam pretium iaculis justo.",
        created_at: "2023-09-14 10:10:30",
      },
      {
        email: "jpieroni1f@icq.com",
        organization: "Jazzy",
        message:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        created_at: "2023-07-30 07:47:10",
      },
      {
        email: "rcoase1g@ustream.tv",
        organization: "Oyoyo",
        message:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        created_at: "2023-05-04 18:22:19",
      },
      {
        email: "lsanpher1h@vistaprint.com",
        organization: "Eire",
        message:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        created_at: "2023-08-18 17:46:48",
      },
      {
        email: "tjiracek1i@list-manage.com",
        organization: "Skynoodle",
        message:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        created_at: "2023-04-27 06:00:18",
      },
      {
        email: "tkenrack1j@cocolog-nifty.com",
        organization: "Blogtags",
        message:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        created_at: "2024-04-09 19:10:08",
      },
      {
        email: "agrassi1k@behance.net",
        organization: "Feednation",
        message:
          "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        created_at: "2023-05-21 22:57:22",
      },
      {
        email: "cewers1l@nasa.gov",
        organization: "Trudoo",
        message:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        created_at: "2023-12-01 19:38:55",
      },
      {
        email: "tmcalinion1m@theguardian.com",
        organization: "Voomm",
        message:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        created_at: "2023-12-28 18:13:07",
      },
      {
        email: "bhughes1n@google.com",
        organization: "Bubblemix",
        message:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        created_at: "2024-02-18 13:10:38",
      },
      {
        email: "sculham1o@columbia.edu",
        organization: "Buzzshare",
        message:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        created_at: "2024-04-12 23:30:21",
      },
      {
        email: "kpuzey1p@loc.gov",
        organization: "Oyondu",
        message:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        created_at: "2024-01-31 06:06:33",
      },
      {
        email: "rwatkins1q@whitehouse.gov",
        organization: "Oyoloo",
        message:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        created_at: "2023-09-01 00:36:43",
      },
      {
        email: "abispham1r@freewebs.com",
        organization: "Avamba",
        message:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        created_at: "2024-01-02 03:14:32",
      },
      {
        email: "brevett1s@ocn.ne.jp",
        organization: "Yombu",
        message:
          "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        created_at: "2023-08-27 11:52:02",
      },
      {
        email: "wfake1t@issuu.com",
        organization: "Browsezoom",
        message:
          "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        created_at: "2023-10-19 00:51:59",
      },
      {
        email: "bquesne1u@wikipedia.org",
        organization: "Thoughtblab",
        message:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        created_at: "2023-05-03 13:22:27",
      },
      {
        email: "mcourson1v@weather.com",
        organization: "Rhyloo",
        message:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        created_at: "2024-04-11 21:15:58",
      },
      {
        email: "nserck1w@amazon.de",
        organization: "Roodel",
        message:
          "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        created_at: "2023-11-23 11:49:31",
      },
      {
        email: "sbinden1x@bigcartel.com",
        organization: "Photobug",
        message:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        created_at: "2023-12-18 21:57:42",
      },
      {
        email: "fmathew1y@wsj.com",
        organization: "Zoovu",
        message: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        created_at: "2023-06-14 16:35:34",
      },
      {
        email: "ydemattia1z@usatoday.com",
        organization: "Eadel",
        message:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        created_at: "2023-08-09 17:57:00",
      },
      {
        email: "vfaulkner20@redcross.org",
        organization: "Topiclounge",
        message:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        created_at: "2023-12-21 01:51:42",
      },
      {
        email: "jcancellor21@mlb.com",
        organization: "Avavee",
        message:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        created_at: "2023-07-09 12:30:52",
      },
      {
        email: "apiscot22@exblog.jp",
        organization: "Browsezoom",
        message:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        created_at: "2024-04-02 11:06:04",
      },
      {
        email: "spickover23@wordpress.org",
        organization: "Yabox",
        message:
          "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        created_at: "2023-06-04 17:39:45",
      },
      {
        email: "dpeery24@wordpress.com",
        organization: "Devpulse",
        message:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        created_at: "2023-12-22 09:29:52",
      },
      {
        email: "bhumberston25@wikia.com",
        organization: "Buzzdog",
        message:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        created_at: "2024-01-07 22:02:00",
      },
      {
        email: "aflukes26@fastcompany.com",
        organization: "Rhyloo",
        message: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        created_at: "2023-10-07 10:45:58",
      },
      {
        email: "jwitten27@answers.com",
        organization: "Blogspan",
        message: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        created_at: "2024-03-22 16:25:54",
      },
      {
        email: "mhowels28@sogou.com",
        organization: "Babblestorm",
        message:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        created_at: "2024-03-18 02:09:50",
      },
      {
        email: "dcosby29@wikispaces.com",
        organization: "Blognation",
        message:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        created_at: "2024-03-23 12:48:48",
      },
      {
        email: "bdanahar2a@livejournal.com",
        organization: "Skinix",
        message:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        created_at: "2023-06-29 07:35:29",
      },
      {
        email: "gfelstead2b@uol.com.br",
        organization: "Yamia",
        message:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        created_at: "2023-12-22 08:34:09",
      },
      {
        email: "amackall2c@prweb.com",
        organization: "Topicshots",
        message:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        created_at: "2024-04-03 21:41:27",
      },
      {
        email: "sbrolly2d@geocities.jp",
        organization: "Cogidoo",
        message:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        created_at: "2024-04-23 04:26:11",
      },
      {
        email: "dmcgiffin2e@sun.com",
        organization: "Snaptags",
        message:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        created_at: "2023-05-16 00:25:01",
      },
      {
        email: "dmcrobert2f@multiply.com",
        organization: "Meejo",
        message:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        created_at: "2023-05-28 02:28:08",
      },
      {
        email: "kmardling2g@nytimes.com",
        organization: "Rhynoodle",
        message:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        created_at: "2024-02-29 22:44:09",
      },
      {
        email: "krodenburgh2h@blogspot.com",
        organization: "Mybuzz",
        message:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        created_at: "2023-09-10 12:07:58",
      },
      {
        email: "eshorthouse2i@tinypic.com",
        organization: "BlogXS",
        message: "Fusce consequat. Nulla nisl. Nunc nisl.",
        created_at: "2024-03-29 06:52:12",
      },
      {
        email: "bzoppo2j@un.org",
        organization: "Realmix",
        message:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        created_at: "2024-03-24 16:29:09",
      },
      {
        email: "cberzen2k@usnews.com",
        organization: "Rhyzio",
        message:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        created_at: "2023-09-06 23:03:10",
      },
      {
        email: "koxley2l@about.com",
        organization: "Voonder",
        message:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        created_at: "2023-11-22 15:29:06",
      },
      {
        email: "xeisikovitsh2m@amazon.co.jp",
        organization: "Mynte",
        message:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        created_at: "2024-01-23 22:27:21",
      },
      {
        email: "bjoskovitch2n@soundcloud.com",
        organization: "Meedoo",
        message:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        created_at: "2023-08-23 10:38:37",
      },
      {
        email: "hhardypiggin2o@prweb.com",
        organization: "Latz",
        message:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        created_at: "2023-05-22 00:27:03",
      },
      {
        email: "cgilhooly2p@facebook.com",
        organization: "Yabox",
        message: "In congue. Etiam justo. Etiam pretium iaculis justo.",
        created_at: "2024-03-28 19:51:44",
      },
      {
        email: "bhollyman2q@webs.com",
        organization: "Meeveo",
        message:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        created_at: "2023-09-28 16:26:23",
      },
      {
        email: "tlate2r@telegraph.co.uk",
        organization: "Skimia",
        message:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        created_at: "2023-06-20 11:17:39",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete(MESSAGE_TABLE, null, {});
  },
};
