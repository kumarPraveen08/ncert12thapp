const SUBJECTS = [
  {
    title: 'Mathematics',
    img: require('../assets/1.webp'),
    titles: [
      {
        id: 'MMP101',
        title: 'Mathematics Part-I',
        loc: 'mathematics/lemh1dd',
        img: 'lemh1cc.jpg',
        out: 'https://www.amazon.in/Mathematics-Textbook-Class-12-12079/dp/8174506292?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=fe5f5240b510d8bcccea08443367c6b4&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lemh1ps.pdf',
          },
          {
            name: 'Relations and Functions',
            file: 'lemh101.pdf',
          },
          {
            name: 'Inverse Trignometric Functions',
            file: 'lemh102.pdf',
          },
          {
            name: 'Matrices',
            file: 'lemh103.pdf',
          },
          {
            name: 'Determinants',
            file: 'lemh104.pdf',
          },
          {
            name: 'Continuity and Differentiability',
            file: 'lemh105.pdf',
          },
          {
            name: 'Application of Derivatives',
            file: 'lemh106.pdf',
          },
          {
            name: 'Answers',
            file: 'lemh1an.pdf',
          },
          {
            name: 'Proof in Mathematics',
            file: 'lemh1a1.pdf',
          },
          {
            name: 'Mathematical Modelling',
            file: 'lemh1a2.pdf',
          },
        ],
      },
      {
        id: 'MMP202',
        title: 'Mathematics Part-II',
        loc: 'mathematics/lemh2dd',
        img: 'lemh2cc.jpg',
        out: 'https://www.amazon.in/Mathematics-Textbook-Class-12-Part/dp/8174506535?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=e35621221b43902c52c3e62721fe0d2e&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lemh2ps.pdf',
          },
          {
            name: 'Integrals',
            file: 'lemh201.pdf',
          },
          {
            name: 'Application of Integrals',
            file: 'lemh202.pdf',
          },
          {
            name: 'Differential Equations',
            file: 'lemh203.pdf',
          },
          {
            name: 'Vector Algebra',
            file: 'lemh204.pdf',
          },
          {
            name: 'Three Dimensional Geometry',
            file: 'lemh205.pdf',
          },
          {
            name: 'Linear Programming',
            file: 'lemh206.pdf',
          },
          {
            name: 'Probability',
            file: 'lemh207.pdf',
          },
          {
            name: 'Answers',
            file: 'lemh2an.pdf',
          },
        ],
      },
      {
        id: 'MMP103',
        title: 'Ganit-I',
        loc: 'mathematics/lhmh1dd',
        img: 'lhmh1cc.jpg',
        out: 'https://www.amazon.in/Ganit-Bhag-Textbook-Maths-Class/dp/8174506683?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=0f157c3e97820f1be3958800ec897ef6&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhmh1ps.pdf',
          },
          {
            name: 'Relations and Functions',
            file: 'lhmh101.pdf',
          },
          {
            name: 'Inverse Trignometric Functions',
            file: 'lhmh102.pdf',
          },
          {
            name: 'Matrices',
            file: 'lhmh103.pdf',
          },
          {
            name: 'Determinants',
            file: 'lhmh104.pdf',
          },
          {
            name: 'Continuity and Differentiability',
            file: 'lhmh105.pdf',
          },
          {
            name: 'Application of Derivatives',
            file: 'lhmh106.pdf',
          },
          {
            name: 'Answers',
            file: 'lhmh1an.pdf',
          },
          {
            name: 'Proof in Mathematics',
            file: 'lhmh1a1.pdf',
          },
          {
            name: 'Mathematical Modelling',
            file: 'lhmh1a2.pdf',
          },
        ],
      },
      {
        id: 'MMP204',
        title: 'Ganit-II',
        loc: 'mathematics/lhmh2dd',
        img: 'lhmh2cc.jpg',
        out: 'https://www.amazon.in/NCERT-Ganit-Textbook-Maths-Class/dp/B08N4PMVK5?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=8eb809af629caa5b5d513d5511af911f&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhmh2ps.pdf',
          },
          {
            name: 'Integrals',
            file: 'lhmh201.pdf',
          },
          {
            name: 'Application of Integrals',
            file: 'lhmh202.pdf',
          },
          {
            name: 'Differential Equations',
            file: 'lhmh203.pdf',
          },
          {
            name: 'Vector Algebra',
            file: 'lhmh204.pdf',
          },
          {
            name: 'Three Dimensional Geometry',
            file: 'lhmh205.pdf',
          },
          {
            name: 'Linear Programming',
            file: 'lhmh206.pdf',
          },
          {
            name: 'Probability',
            file: 'lhmh207.pdf',
          },
          {
            name: 'Answers',
            file: 'lhmh2an.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Physics',
    img: require('../assets/2.webp'),
    titles: [
      {
        id: 'PHY01',
        title: 'Physics Part-I',
        loc: 'physics/leph1dd',
        img: 'leph1cc.jpg',
        out: 'https://www.amazon.in/Physics-Text-Book-Part-Class/dp/8174506314?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=5a64d902be8b247eb92fdee34962f070&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'leph1ps.pdf',
          },
          {
            name: 'Electric Charges And Fields',
            file: 'leph101.pdf',
          },
          {
            name: 'Electrostatic Potential And Capacitance',
            file: 'leph102.pdf',
          },
          {
            name: 'Current Electricity',
            file: 'leph103.pdf',
          },
          {
            name: 'Moving Charges And Magnetism',
            file: 'leph104.pdf',
          },
          {
            name: 'Magnetism And Matter',
            file: 'leph105.pdf',
          },
          {
            name: 'Electro Magnetic Induction',
            file: 'leph106.pdf',
          },
          {
            name: 'Alternating Current',
            file: 'leph107.pdf',
          },
          {
            name: 'Electromagnetic Waves',
            file: 'leph108.pdf',
          },
          {
            name: 'Answers',
            file: 'leph1an.pdf',
          },
        ],
      },
      {
        id: 'PHY02',
        title: 'Physics Part-II',
        loc: 'physics/leph2dd',
        img: 'leph2cc.jpg',
        out: 'https://www.amazon.in/NCERT-Physics-Part-Textbook-Class/dp/B08WJ31Y6F?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=8533a57c368241d80c6128f400e86f7b&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'leph2ps.pdf',
          },
          {
            name: 'Ray Optics And Optical Instruments',
            file: 'leph201.pdf',
          },
          {
            name: 'Wave Optics',
            file: 'leph202.pdf',
          },
          {
            name: 'Dual Nature Of Radiation And Matter',
            file: 'leph203.pdf',
          },
          {
            name: 'Atoms',
            file: 'leph204.pdf',
          },
          {
            name: 'Nuclei',
            file: 'leph205.pdf',
          },
          {
            name: 'Semiconductor Electronics: Materials, Devices And Simple Circuits',
            file: 'leph206.pdf',
          },
        ],
      },
      {
        id: 'PHY03',
        title: 'Bhautiki-I',
        loc: 'physics/lhph1dd',
        img: 'lhph1cc.jpg',
        out: 'https://www.amazon.in/NCERT-Bhautiki-medium-physics-binding/dp/B09FK8DLBX?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=558ef6560fba4ac3bacdffc8e6a2e57b&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhph1ps.pdf',
          },
          {
            name: 'Electric Charges And Fields',
            file: 'lhph101.pdf',
          },
          {
            name: 'Electrostatic Potential And Capacitance',
            file: 'lhph102.pdf',
          },
          {
            name: 'Current Electricity',
            file: 'lhph103.pdf',
          },
          {
            name: 'Moving Charges And Magnetism',
            file: 'lhph104.pdf',
          },
          {
            name: 'Magnetism And Matter',
            file: 'lhph105.pdf',
          },
          {
            name: 'Electro Magnetic Induction',
            file: 'lhph106.pdf',
          },
          {
            name: 'Alternating Current',
            file: 'lhph107.pdf',
          },
          {
            name: 'Electromagnetic Waves',
            file: 'lhph108.pdf',
          },
          {
            name: 'Answers',
            file: 'lhph1an.pdf',
          },
        ],
      },
      {
        id: 'PHY04',
        title: 'Bhautiki-II',
        loc: 'physics/lhph2dd',
        img: 'lhph2cc.jpg',
        out: 'https://www.amazon.in/Bhutiki-Bhag-Textbook-Physics-12-12092/dp/8174507264?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=236399003e75f22696d23df25bbbb677&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhph2ps.pdf',
          },
          {
            name: 'Ray Optics And Optical Instruments',
            file: 'lhph201.pdf',
          },
          {
            name: 'Wave Optics',
            file: 'lhph202.pdf',
          },
          {
            name: 'Dual Nature Of Radiation And Matter',
            file: 'lhph203.pdf',
          },
          {
            name: 'Atoms',
            file: 'lhph204.pdf',
          },
          {
            name: 'Nuclei',
            file: 'lhph205.pdf',
          },
          {
            name: 'Semiconductor Electronics: Materials, Devices And Simple Circuits',
            file: 'lhph206.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Accountancy',
    img: require('../assets/3.webp'),
    titles: [
      {
        id: 'ACCY01',
        title: 'Accountancy Part I',
        loc: 'accountancy/leac1dd',
        img: 'leac1cc.jpg',
        out: 'https://www.amazon.in/Accountancy-Textbook-Organisation-Partnership-Accounts/dp/8174506403?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=8dd0d50a0e62f0182e5e135102fa3913&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'leac1ps.pdf',
          },
          {
            name: 'Accounting for Partnership: Basic Concepts',
            file: 'leac101.pdf',
          },
          {
            name: 'Reconstitution of a Partnership Firm Admission of a Partner',
            file: 'leac102.pdf',
          },
          {
            name: 'Reconstitution of a Partnership Firm Retirement/Death of a Partner',
            file: 'leac103.pdf',
          },
          {
            name: 'Dissolution of Partnership Firm',
            file: 'leac104.pdf',
          },
        ],
      },
      {
        id: 'ACCY02',
        title: 'Accountancy Part II',
        loc: 'accountancy/leac2dd',
        img: 'leac2cc.jpg',
        out: 'https://www.amazon.in/NCERT-ACCOUNTANCY-II-CLASS-12/dp/B081R93H39?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=647f6fbba582160e4038495babf9f398&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'leac2ps.pdf',
          },
          {
            name: 'Accounting for Share Capital',
            file: 'leac201.pdf',
          },
          {
            name: 'Issue and Redemption of Debentures',
            file: 'leac202.pdf',
          },
          {
            name: 'Financial Statements of a Company',
            file: 'leac203.pdf',
          },
          {
            name: 'Analysis of Financial Statements',
            file: 'leac204.pdf',
          },
          {
            name: 'Accounting Ratios',
            file: 'leac205.pdf',
          },
          {
            name: 'Cash Flow Statement',
            file: 'leac206.pdf',
          },
        ],
      },
      {
        id: 'ACCY03',
        title: 'Lekhashastra Part I',
        loc: 'accountancy/lhac1dd',
        img: 'lhac1cc.jpg',
        out: 'https://www.amazon.in/Lekhasastra-Bhag-Class-12-12120/dp/8174507272',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhac1ps.pdf',
          },
          {
            name: 'Accounting for Partnership: Basic Concepts',
            file: 'lhac101.pdf',
          },
          {
            name: 'Reconstitution of a Partnership Firm Admission of a Partner',
            file: 'lhac102.pdf',
          },
          {
            name: 'Reconstitution of a Partnership Firm Retirement/Death of a Partner',
            file: 'lhac103.pdf',
          },
          {
            name: 'Dissolution of Partnership Firm',
            file: 'lhac104.pdf',
          },
        ],
      },
      {
        id: 'ACCY04',
        title: 'Lekhashastra Part II',
        loc: 'accountancy/lhac2dd',
        img: 'lhac2cc.jpg',
        out: 'https://www.amazon.in/Lekhshashtra-II-Class-12-12129/dp/9350077957?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=ac059d2206ae1a85e42831f4efe5edfa&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhac2ps.pdf',
          },
          {
            name: 'Accounting for Share Capital',
            file: 'lhac201.pdf',
          },
          {
            name: 'Issue and Redemption of Debentures',
            file: 'lhac202.pdf',
          },
          {
            name: 'Financial Statements of a Company',
            file: 'lhac203.pdf',
          },
          {
            name: 'Analysis of Financial Statements',
            file: 'lhac204.pdf',
          },
          {
            name: 'Accounting Ratios',
            file: 'lhac205.pdf',
          },
          {
            name: 'Cash Flow Statement',
            file: 'lhac206.pdf',
          },
        ],
      },
      {
        id: 'ACCY05',
        title: 'Computerised Accounting System',
        loc: 'accountancy/leca1dd',
        img: 'leca1cc.jpg',
        out: 'https://www.amazon.in/NCERT-Accountancy-Computerised-Accounting-System/dp/935007026X?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=a92d40da2f427fdf7b3c7bed345d6f70&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'leca1ps.pdf',
          },
          {
            name: 'Overview Of Computerised Accounting System',
            file: 'leca101.pdf',
          },
          {
            name: 'Spreadsheet',
            file: 'leca102.pdf',
          },
          {
            name: 'Use Of Spreadsheet In Business Applications',
            file: 'leca103.pdf',
          },
          {
            name: 'Graphs And Charts For Business Data',
            file: 'leca104.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Sanskrit',
    img: require('../assets/4.webp'),
    titles: [
      {
        id: 'SNS01',
        title: 'Bhaswati',
        loc: 'sanskrit/lhsk1dd',
        img: 'lhsk1cc.jpg',
        out: 'https://www.amazon.in/Bhaswati-Bhag-Textbook-Sanskrit-Class/dp/8174506373?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=7cf28f895cf8c055fa3caca18b783a08&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhsk1ps.pdf',
          },
          {
            name: 'Chapter 1',
            file: 'lhsk101.pdf',
          },
          {
            name: 'Chapter 2',
            file: 'lhsk102.pdf',
          },
          {
            name: 'Chapter 3',
            file: 'lhsk103.pdf',
          },
          {
            name: 'Chapter 4',
            file: 'lhsk104.pdf',
          },
          {
            name: 'Chapter 5',
            file: 'lhsk105.pdf',
          },
          {
            name: 'Chapter 6',
            file: 'lhsk106.pdf',
          },
          {
            name: 'Chapter 7',
            file: 'lhsk107.pdf',
          },
          {
            name: 'Chapter 8',
            file: 'lhsk108.pdf',
          },
          {
            name: 'Chapter 9',
            file: 'lhsk109.pdf',
          },
          {
            name: 'Chapter 10',
            file: 'lhsk110.pdf',
          },
        ],
      },
      {
        id: 'SNS02',
        title: 'Shaswati',
        loc: 'sanskrit/lhsk2dd',
        img: 'lhsk2cc.jpg',
        out: 'https://www.amazon.in/Shashwati-Bhag-Textbook-Sanskrit-Class/dp/8174506381',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhsk2ps.pdf',
          },
          {
            name: 'Chapter 1',
            file: 'lhsk201.pdf',
          },
          {
            name: 'Chapter 2',
            file: 'lhsk202.pdf',
          },
          {
            name: 'Chapter 3',
            file: 'lhsk203.pdf',
          },
          {
            name: 'Chapter 4',
            file: 'lhsk204.pdf',
          },
          {
            name: 'Chapter 5',
            file: 'lhsk205.pdf',
          },
          {
            name: 'Chapter 6',
            file: 'lhsk206.pdf',
          },
          {
            name: 'Chapter 7',
            file: 'lhsk207.pdf',
          },
          {
            name: 'Chapter 8',
            file: 'lhsk208.pdf',
          },
          {
            name: 'Chapter 9',
            file: 'lhsk209.pdf',
          },
          {
            name: 'Chapter 10',
            file: 'lhsk210.pdf',
          },
          {
            name: 'Chapter 11',
            file: 'lhsk211.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Hindi',
    img: require('../assets/5.webp'),
    titles: [
      {
        id: 'HI01',
        title: 'Antra',
        loc: 'hindi/lhat1dd',
        img: 'lhat1cc.jpg',
        out: 'https://www.amazon.in/antra-class-12-hindi-book/s?k=antra+class+12+hindi+book&linkCode=ll2&tag=wwwwbaccessor-21&linkId=a179b8fd129b4713eacc7c8b1ae7fcdc&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhat1ps.pdf',
          },
          {
            name: 'Kavita 1',
            file: 'lhat101.pdf',
          },
          {
            name: 'Kavita 2',
            file: 'lhat102.pdf',
          },
          {
            name: 'Kavita 3',
            file: 'lhat103.pdf',
          },
          {
            name: 'Kavita 4',
            file: 'lhat104.pdf',
          },
          {
            name: 'Kavita 5',
            file: 'lhat105.pdf',
          },
          {
            name: 'Kavita 6',
            file: 'lhat106.pdf',
          },
          {
            name: 'Kavita 7',
            file: 'lhat107.pdf',
          },
          {
            name: 'Kavita 8',
            file: 'lhat108.pdf',
          },
          {
            name: 'Kavita 9',
            file: 'lhat109.pdf',
          },
          {
            name: 'Story 10',
            file: 'lhat110.pdf',
          },
          {
            name: 'Story 11',
            file: 'lhat111.pdf',
          },
          {
            name: 'Story 12',
            file: 'lhat112.pdf',
          },
          {
            name: 'Story 13',
            file: 'lhat113.pdf',
          },
          {
            name: 'Story 14',
            file: 'lhat114.pdf',
          },
          {
            name: 'Story 15',
            file: 'lhat115.pdf',
          },
          {
            name: 'Story 16',
            file: 'lhat116.pdf',
          },
          {
            name: 'Story 17',
            file: 'lhat117.pdf',
          },
        ],
      },
      {
        id: 'HI02',
        title: 'Aroh',
        loc: 'hindi/lhar1dd',
        img: 'lhar1cc.jpg',
        out: 'https://www.amazon.in/s?k=Aroh+class+12+hindi+book&crid=EXRBZISOTBR4&linkCode=ll2&tag=wwwwbaccessor-21&linkId=fd2031638641179c6cab38bec44af3d4&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhar1ps.pdf',
          },
          {
            name: 'Chapter 1',
            file: 'lhar101.pdf',
          },
          {
            name: 'Chapter 2',
            file: 'lhar102.pdf',
          },
          {
            name: 'Chapter 3',
            file: 'lhar103.pdf',
          },
          {
            name: 'Chapter 4',
            file: 'lhar104.pdf',
          },
          {
            name: 'Chapter 5',
            file: 'lhar105.pdf',
          },
          {
            name: 'Chapter 6',
            file: 'lhar106.pdf',
          },
          {
            name: 'Chapter 7',
            file: 'lhar107.pdf',
          },
          {
            name: 'Chapter 8',
            file: 'lhar108.pdf',
          },
          {
            name: 'Chapter 9',
            file: 'lhar109.pdf',
          },
          {
            name: 'Chapter 10',
            file: 'lhar110.pdf',
          },
          {
            name: 'Chapter 11',
            file: 'lhar111.pdf',
          },
          {
            name: 'Chapter 12',
            file: 'lhar112.pdf',
          },
          {
            name: 'Chapter 13',
            file: 'lhar113.pdf',
          },
          {
            name: 'Chapter 14',
            file: 'lhar114.pdf',
          },
          {
            name: 'Chapter 15',
            file: 'lhar115.pdf',
          },
        ],
      },
      {
        id: 'HI03',
        title: 'Vitan',
        loc: 'hindi/lhvt1dd',
        img: 'lhvt1cc.jpg',
        out: 'https://www.amazon.in/s?k=vitan+class+12+hindi+book&linkCode=ll2&tag=wwwwbaccessor-21&linkId=93d7b9aa1e80815d8106a75371f43de3&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhvt1ps.pdf',
          },
          {
            name: 'Chapter 1',
            file: 'lhvt101.pdf',
          },
          {
            name: 'Chapter 2',
            file: 'lhvt102.pdf',
          },
          {
            name: 'Chapter 3',
            file: 'lhvt103.pdf',
          },
          {
            name: 'Lekhak Parichay',
            file: 'lhvt1lp.pdf',
          },
        ],
      },
      {
        id: 'HI04',
        title: 'Antral Bhag 2',
        loc: 'hindi/lhan1dd',
        img: 'lhan1cc.jpg',
        out: 'https://www.amazon.in/Antral-Bhag-Hindi-Class-12/dp/B0D76PLNTT?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=02c329fdf65b5b1cb3b7f623ffbd96c0&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhan1ps.pdf',
          },
          {
            name: 'Chapter 1',
            file: 'lhan101.pdf',
          },
          {
            name: 'Chapter 2',
            file: 'lhan102.pdf',
          },
          {
            name: 'Chapter 3',
            file: 'lhan103.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'English',
    img: require('../assets/6.webp'),
    titles: [
      {
        id: 'ENG01',
        title: 'Kaliedoscope',
        loc: 'english/lekl1dd',
        img: 'lekl1cc.jpg',
        out: 'https://www.amazon.in/Kaleidoscope-Textbook-English-Elective-Class/dp/8174506632/',
        chapters: [
          {
            name: 'Prelims',
            file: 'lekl1ps.pdf',
          },
          {
            name: 'Short Stories 1',
            file: 'lekl101.pdf',
          },
          {
            name: 'Short Stories 2',
            file: 'lekl102.pdf',
          },
          {
            name: 'Short Stories 3',
            file: 'lekl103.pdf',
          },
          {
            name: 'Short Stories 4',
            file: 'lekl104.pdf',
          },
          {
            name: 'Short Stories 5',
            file: 'lekl105.pdf',
          },
          {
            name: 'Poerty 1',
            file: 'lekl106.pdf',
          },
          {
            name: 'Poerty 2',
            file: 'lekl107.pdf',
          },
          {
            name: 'Poerty 3',
            file: 'lekl108.pdf',
          },
          {
            name: 'Poerty 4',
            file: 'lekl109.pdf',
          },
          {
            name: 'Poerty 5',
            file: 'lekl110.pdf',
          },
          {
            name: 'Poerty 6',
            file: 'lekl111.pdf',
          },
          {
            name: 'Poerty 7',
            file: 'lekl112.pdf',
          },
          {
            name: 'Poerty 8',
            file: 'lekl113.pdf',
          },
          {
            name: 'Non Fiction 1',
            file: 'lekl114.pdf',
          },
          {
            name: 'Non Fiction 2',
            file: 'lekl115.pdf',
          },
          {
            name: 'Non Fiction 3',
            file: 'lekl116.pdf',
          },
          {
            name: 'Non Fiction 4',
            file: 'lekl117.pdf',
          },
          {
            name: 'Non Fiction 5',
            file: 'lekl118.pdf',
          },
          {
            name: 'Non Fiction 6',
            file: 'lekl119.pdf',
          },
          {
            name: 'Drama 1',
            file: 'lekl120.pdf',
          },
          {
            name: 'Drama 2',
            file: 'lekl121.pdf',
          },
        ],
      },
      {
        id: 'ENG02',
        title: 'Flamingo',
        loc: 'english/lefl1dd',
        img: 'lefl1cc.jpg',
        out: 'https://www.amazon.in/Flamingo-Textbook-English-Course-Class/dp/8174506500?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=1f5bd875508dc35370cb6cf96cab7fe4&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lefl1ps.pdf',
          },
          {
            name: 'Prose 1',
            file: 'lefl101.pdf',
          },
          {
            name: 'Prose 2',
            file: 'lefl102.pdf',
          },
          {
            name: 'Prose 3',
            file: 'lefl103.pdf',
          },
          {
            name: 'Prose 4',
            file: 'lefl104.pdf',
          },
          {
            name: 'Prose 5',
            file: 'lefl105.pdf',
          },
          {
            name: 'Prose 6',
            file: 'lefl106.pdf',
          },
          {
            name: 'Prose 7',
            file: 'lefl107.pdf',
          },
          {
            name: 'Prose 8',
            file: 'lefl108.pdf',
          },
          {
            name: 'Poerty 1',
            file: 'lefl109.pdf',
          },
          {
            name: 'Poerty 2',
            file: 'lefl110.pdf',
          },
          {
            name: 'Poerty 3',
            file: 'lefl111.pdf',
          },
          {
            name: 'Poerty 4',
            file: 'lefl112.pdf',
          },
          {
            name: 'Poerty 5',
            file: 'lefl113.pdf',
          },
        ],
      },
      {
        id: 'ENG03',
        title: 'Vistas',
        loc: 'english/levt1dd',
        img: 'levt1cc.jpg',
        out: 'https://www.amazon.in/Vistas-Core-Course-Supplementary-English/dp/817450723X?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=7e1b1734e56338b7e2a3fb05317fb6f4&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'levt1ps.pdf',
          },
          {
            name: 'The Third Level',
            file: 'levt101.pdf',
          },
          {
            name: 'The Tiger King',
            file: 'levt102.pdf',
          },
          {
            name: 'Journey to the end of the Earth',
            file: 'levt103.pdf',
          },
          {
            name: 'The Enemy',
            file: 'levt104.pdf',
          },
          {
            name: 'On The Face Of It',
            file: 'levt105.pdf',
          },
          {
            name: 'Memories of Childhood',
            file: 'levt106.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Biology',
    img: require('../assets/7.webp'),
    titles: [
      {
        id: 'BIO01',
        title: 'Biology',
        loc: 'biology/lebo1dd',
        img: 'lebo1cc.jpg',
        out: 'https://www.amazon.in/NCERT-12th-Biology-Text-Book/dp/B09C1NG3FZ?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=126c16287af83e858824b61546074d78&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lebo1ps.pdf',
          },
          {
            name: 'Sexual Reproduction In Flowering Plants',
            file: 'lebo101.pdf',
          },
          {
            name: 'Human Reproduction',
            file: 'lebo102.pdf',
          },
          {
            name: 'Reproductive Health',
            file: 'lebo103.pdf',
          },
          {
            name: 'Principles Of Inheritance And Variation',
            file: 'lebo104.pdf',
          },
          {
            name: 'Molecular Basis Of Inheritance',
            file: 'lebo105.pdf',
          },
          {
            name: 'Evolution',
            file: 'lebo106.pdf',
          },
          {
            name: 'Human Health And Disease',
            file: 'lebo107.pdf',
          },
          {
            name: 'Microbes In Human Welfare',
            file: 'lebo108.pdf',
          },
          {
            name: 'Biotechnology : Principles And Processes',
            file: 'lebo109.pdf',
          },
          {
            name: 'Biotechnology And Its Applications',
            file: 'lebo110.pdf',
          },
          {
            name: 'Organisms And Populations',
            file: 'lebo111.pdf',
          },
          {
            name: 'Ecosystem',
            file: 'lebo112.pdf',
          },
          {
            name: 'Biodiversity And Conservation',
            file: 'lebo113.pdf',
          },
        ],
      },
      {
        id: 'BIO02',
        title: 'Jeev Vigyan',
        loc: 'biology/lhbo1dd',
        img: 'lhbo1cc.jpg',
        out: 'https://www.amazon.in/Jeev-Vigyan-Class-12-12084/dp/8174506802?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=f5cad59762a61b93925a87ce4806c854&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhbo1ps.pdf',
          },
          {
            name: 'Sexual Reproduction In Flowering Plants',
            file: 'lhbo101.pdf',
          },
          {
            name: 'Human Reproduction',
            file: 'lhbo102.pdf',
          },
          {
            name: 'Reproductive Health',
            file: 'lhbo103.pdf',
          },
          {
            name: 'Principles Of Inheritance And Variation',
            file: 'lhbo104.pdf',
          },
          {
            name: 'Molecular Basis Of Inheritance',
            file: 'lhbo105.pdf',
          },
          {
            name: 'Evolution',
            file: 'lhbo106.pdf',
          },
          {
            name: 'Human Health And Disease',
            file: 'lhbo107.pdf',
          },
          {
            name: 'Microbes In Human Welfare',
            file: 'lhbo108.pdf',
          },
          {
            name: 'Biotechnology : Principles And Processes',
            file: 'lhbo109.pdf',
          },
          {
            name: 'Biotechnology And Its Applications',
            file: 'lhbo110.pdf',
          },
          {
            name: 'Organisms And Populations',
            file: 'lhbo111.pdf',
          },
          {
            name: 'Ecosystem',
            file: 'lhbo112.pdf',
          },
          {
            name: 'Biodiversity And Conservation',
            file: 'lhbo113.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'History',
    img: require('../assets/8.webp'),
    titles: [
      {
        id: 'HTY01',
        title: 'Themes in Indian History-I',
        loc: 'history/lehs1dd',
        img: 'lehs1cc.jpg',
        out: 'https://www.amazon.in/NCERT-Themes-Indian-History-Class/dp/B09CDQLFX7?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=17f852d1b94f85bfb89fdb96b206cf01&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lehs1ps.pdf',
          },
          {
            name: 'Bricks, Beads and Bones',
            file: 'lehs101.pdf',
          },
          {
            name: 'Kings, Farmers and Towns',
            file: 'lehs102.pdf',
          },
          {
            name: 'Kinship, Caste and Class',
            file: 'lehs103.pdf',
          },
          {
            name: 'Thinkers, Beliefs and Buildings',
            file: 'lehs104.pdf',
          },
        ],
      },
      {
        id: 'HTY02',
        title: 'Themes in Indian History-II',
        loc: 'history/lehs2dd',
        img: 'lehs2cc.jpg',
        out: 'https://www.amazon.in/NCERT-Themes-Indian-History-Class/dp/B09CDSQX8X?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=57f1814125028a6db087aa26650c52a9&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lehs2ps.pdf',
          },
          {
            name: 'Through the Eyes of Travellers',
            file: 'lehs201.pdf',
          },
          {
            name: 'Bhakti- Sufi Traditions',
            file: 'lehs202.pdf',
          },
          {
            name: 'An Imperial Capital Vijayanagara',
            file: 'lehs203.pdf',
          },
          {
            name: 'Peasants, Zamindars and the State',
            file: 'lehs204.pdf',
          },
        ],
      },
      {
        id: 'HTY03',
        title: 'Themes in Indian History-III',
        loc: 'history/lehs3dd',
        img: 'lehs3cc.jpg',
        out: 'https://www.amazon.in/Themes-Indian-History-Part-Class/dp/B01N9G59BQ?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=d17b74061e887d551a9204d5313778ec&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lehs3ps.pdf',
          },
          {
            name: 'Colonialism and the Countryside',
            file: 'lehs301.pdf',
          },
          {
            name: 'Rebels and the Raj',
            file: 'lehs302.pdf',
          },
          {
            name: 'Mahatma Gandhi and the Nationalist Movement',
            file: 'lehs303.pdf',
          },
          {
            name: 'Mahatma Gandhi and the Nationalist Movement',
            file: 'lehs304.pdf',
          },
        ],
      },
      {
        id: 'HTY04',
        title: 'Bharatiya Itihas ke kuchh Vishay-I',
        loc: 'history/lhhs1dd',
        img: 'lhhs1cc.jpg',
        out: 'https://www.amazon.in/-/hi/NCERT/dp/8174507000',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhhs1ps.pdf',
          },
          {
            name: 'Bricks, Beads and Bones',
            file: 'lhhs101.pdf',
          },
          {
            name: 'Kings, Farmers and Towns',
            file: 'lhhs102.pdf',
          },
          {
            name: 'Kinship, Caste and Class',
            file: 'lhhs103.pdf',
          },
          {
            name: 'Thinkers, Beliefs and Buildings',
            file: 'lhhs104.pdf',
          },
        ],
      },
      {
        id: 'HTY05',
        title: 'Bharatiya Itihas ke kuchh Vishay-II',
        loc: 'history/lhhs2dd',
        img: 'lhhs2cc.jpg',
        out: 'https://www.amazon.in/-/hi/NCERT/dp/B0844YHK7D?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=abe36ba1806e2f48a087223aa50c4b52&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhhs2ps.pdf',
          },
          {
            name: 'Through the Eyes of Travellers',
            file: 'lhhs201.pdf',
          },
          {
            name: 'Bhakti- Sufi Traditions',
            file: 'lhhs202.pdf',
          },
          {
            name: 'An Imperial Capital Vijayanagara',
            file: 'lhhs203.pdf',
          },
          {
            name: 'Peasants, Zamindars and the State',
            file: 'lhhs204.pdf',
          },
        ],
      },
      {
        id: 'HTY06',
        title: 'Bharatiya Itihas ke kuchh Vishay-III',
        loc: 'history/lhhs3dd',
        img: 'lhhs3cc.jpg',
        out: 'https://www.amazon.in/Bhartiya-Itihas-Kuchh-Vishay-Bhag/dp/817450771X?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=2cba51fb49650623f0133e96d054036f&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhhs3ps.pdf',
          },
          {
            name: 'Colonialism and the Countryside',
            file: 'lhhs301.pdf',
          },
          {
            name: 'Rebels and the Raj',
            file: 'lhhs302.pdf',
          },
          {
            name: 'Mahatma Gandhi and the Nationalist Movement',
            file: 'lhhs303.pdf',
          },
          {
            name: 'Mahatma Gandhi and the Nationalist Movement',
            file: 'lhhs304.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Geography',
    img: require('../assets/9.webp'),
    titles: [
      {
        id: 'GEO01',
        title: 'Fundamentals of Human Geography',
        loc: 'geography/legy1dd',
        img: 'legy1cc.jpg',
        out: 'https://www.amazon.in/Fundamentals-Human-Geography-Class-12097/dp/8174506624?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=3883da197512b70d6483eef2959fc3cf&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'legy1ps.pdf',
          },
          {
            name: 'Human Geography',
            file: 'legy101.pdf',
          },
          {
            name: 'The World Population',
            file: 'legy102.pdf',
          },
          {
            name: 'Human Development',
            file: 'legy103.pdf',
          },
          {
            name: 'Primary Activities',
            file: 'legy104.pdf',
          },
          {
            name: 'Secondary Activities',
            file: 'legy105.pdf',
          },
          {
            name: 'Tertiary and Quaternary Activities',
            file: 'legy106.pdf',
          },
          {
            name: 'Transport and Communication',
            file: 'legy107.pdf',
          },
          {
            name: 'International Trade',
            file: 'legy108.pdf',
          },
          {
            name: 'Appendix',
            file: 'legy1a1.pdf',
          },
        ],
      },
      {
        id: 'GEO02',
        title: 'Practical Work in Geography Part II',
        loc: 'geography/legy3dd',
        img: 'legy3cc.jpg',
        out: 'https://www.amazon.in/NCERT-Practical-Geography-Textbook-English/dp/B08N4NM125?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=a1e277ddd907f815581541d25c899470&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'legy3ps.pdf',
          },
          {
            name: 'Data - Its source and compilation',
            file: 'legy301.pdf',
          },
          {
            name: 'Data Processing',
            file: 'legy302.pdf',
          },
          {
            name: 'Geographical Representation of Data',
            file: 'legy303.pdf',
          },
          {
            name: 'Spatial Information Technology',
            file: 'legy304.pdf',
          },
        ],
      },
      {
        id: 'GEO03',
        title: 'India - People And Economy',
        loc: 'geography/legy2dd',
        img: 'legy2cc.jpg',
        out: 'https://www.amazon.in/India-People-Economy-Textbook-Geography/dp/8174507345?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=1e395b5982a2fa8f37538be0b1a457ec&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'legy2ps.pdf',
          },
          {
            name: 'Population',
            file: 'legy201.pdf',
          },
          {
            name: 'Human Settlements',
            file: 'legy202.pdf',
          },
          {
            name: 'Land Resources And Agriculture',
            file: 'legy203.pdf',
          },
          {
            name: 'Water Resources',
            file: 'legy204.pdf',
          },
          {
            name: 'Mineral And Energy Resources',
            file: 'legy205.pdf',
          },
          {
            name: 'Planning And Sustainable Development In Indian Context',
            file: 'legy206.pdf',
          },
          {
            name: 'Transport And Communication',
            file: 'legy207.pdf',
          },
          {
            name: 'International Trade',
            file: 'legy208.pdf',
          },
          {
            name: 'Geographical Perspective On Selected Issues And Problems',
            file: 'legy209.pdf',
          },
          {
            name: 'Appendix',
            file: 'legy2a1.pdf',
          },
        ],
      },
      {
        id: 'GEO04',
        title: 'Manav Bhugol Ke Mool Sidhant',
        loc: 'geography/lhgy1dd',
        img: 'lhgy1cc.jpg',
        out: 'https://www.amazon.in/Manav-Bhugol-Mool-Sidhant-Geography/dp/8174506748?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=3f66c037e5c8e3b79a08f3a80da43182&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhgy1ps.pdf',
          },
          {
            name: 'Human Geography',
            file: 'lhgy101.pdf',
          },
          {
            name: 'The World Population',
            file: 'lhgy102.pdf',
          },
          {
            name: 'Human Development',
            file: 'lhgy103.pdf',
          },
          {
            name: 'Primary Activities',
            file: 'lhgy104.pdf',
          },
          {
            name: 'Secondary Activities',
            file: 'lhgy105.pdf',
          },
          {
            name: 'Tertiary and Quaternary Activities',
            file: 'lhgy106.pdf',
          },
          {
            name: 'Transport and Communication',
            file: 'lhgy107.pdf',
          },
          {
            name: 'International Trade',
            file: 'lhgy108.pdf',
          },
          {
            name: 'Appendix',
            file: 'lhgy1a1.pdf',
          },
        ],
      },
      {
        id: 'GEO05',
        title: 'Bhugol main pryogatmak karye',
        loc: 'geography/lhgy3dd',
        img: 'lhgy3cc.jpg',
        out: 'https://www.amazon.in/Bhugol-Mein-Prayogatmak-Karya-Bhag/dp/8174507019',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhgy3ps.pdf',
          },
          {
            name: 'Data - Its source and compilation',
            file: 'lhgy301.pdf',
          },
          {
            name: 'Data Processing',
            file: 'lhgy302.pdf',
          },
          {
            name: 'Geographical Representation of Data',
            file: 'lhgy303.pdf',
          },
          {
            name: 'Spatial Information Technology',
            file: 'lhgy304.pdf',
          },
        ],
      },
      {
        id: 'GEO06',
        title: 'Bharat log aur arthvyasastha(Bhugol)',
        loc: 'geography/lhgy2dd',
        img: 'lhgy2cc.jpg',
        out: 'https://www.amazon.in/Bharat-Log-Aur-Arthvyavastha-Geography/dp/8174507221',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhgy2ps.pdf',
          },
          {
            name: 'Population',
            file: 'lhgy201.pdf',
          },
          {
            name: 'Human Settlements',
            file: 'lhgy202.pdf',
          },
          {
            name: 'Land Resources And Agriculture',
            file: 'lhgy203.pdf',
          },
          {
            name: 'Water Resources',
            file: 'lhgy204.pdf',
          },
          {
            name: 'Mineral And Energy Resources',
            file: 'lhgy205.pdf',
          },
          {
            name: 'Planning And Sustainable Development In Indian Context',
            file: 'lhgy206.pdf',
          },
          {
            name: 'Transport And Communication',
            file: 'lhgy207.pdf',
          },
          {
            name: 'International Trade',
            file: 'lhgy208.pdf',
          },
          {
            name: 'Geographical Perspective On Selected Issues And Problems',
            file: 'lhgy209.pdf',
          },
          {
            name: 'Appendix',
            file: 'lhgy2a1.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Psychology',
    img: require('../assets/10.webp'),
    titles: [
      {
        id: 'PSY01',
        title: 'Psychology',
        loc: 'psychology/lepy1dd',
        img: 'lepy1cc.jpg',
        out: 'https://www.amazon.in/Psychology-Textbook-Class-12-12123/dp/8174506608?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=6a777fd129aad404e94f9d6688cca2dd&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lepy1ps.pdf',
          },
          {
            name: 'Variations In Psychological Attributes Tributes',
            file: 'lepy101.pdf',
          },
          {
            name: 'Self And Personality',
            file: 'lepy102.pdf',
          },
          {
            name: 'Meeting Life Challenges',
            file: 'lepy103.pdf',
          },
          {
            name: 'Psychological Disorders',
            file: 'lepy104.pdf',
          },
          {
            name: 'Therapeutic Approaches',
            file: 'lepy105.pdf',
          },
          {
            name: 'Attitude And Social Cognition',
            file: 'lepy106.pdf',
          },
          {
            name: 'Social Influence And Group Processes',
            file: 'lepy107.pdf',
          },
          {
            name: 'Glossary',
            file: 'lepy1gl.pdf',
          },
        ],
      },
      {
        id: 'PSY02',
        title: 'Manovigyan',
        loc: 'psychology/lhpy1dd',
        img: 'lhpy1cc.jpg',
        out: 'https://www.amazon.in/NCERT-Manovigyan-Parichaya-Hindi-med/dp/B09CLDB333?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=1934cfb78d4ef57a1ced2d7092e46b93&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhpy1ps.pdf',
          },
          {
            name: 'Variations In Psychological Attributes Tributes',
            file: 'lhpy101.pdf',
          },
          {
            name: 'Self And Personality',
            file: 'lhpy102.pdf',
          },
          {
            name: 'Meeting Life Challenges',
            file: 'lhpy103.pdf',
          },
          {
            name: 'Psychological Disorders',
            file: 'lhpy104.pdf',
          },
          {
            name: 'Therapeutic Approaches',
            file: 'lhpy105.pdf',
          },
          {
            name: 'Attitude And Social Cognition',
            file: 'lhpy106.pdf',
          },
          {
            name: 'Social Influence And Group Processes',
            file: 'lhpy107.pdf',
          },
          {
            name: 'Glossary',
            file: 'lhpy1gl.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Sociology',
    img: require('../assets/11.webp'),
    titles: [
      {
        id: 'SOC01',
        title: 'Indian Society',
        loc: 'sociology/lesy1dd',
        img: 'lesy1cc.jpg',
        out: 'https://www.amazon.in/Indian-Society-Textbook-Sociology-Class/dp/8174506527?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=62031a338a67b27568943ede9cdf6823&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lesy1ps.pdf',
          },
          {
            name: 'Introducing Indian Society',
            file: 'lesy101.pdf',
          },
          {
            name: 'The Demographic Structure of the Indian Society',
            file: 'lesy102.pdf',
          },
          {
            name: 'Social Institutions: Continuity and Change',
            file: 'lesy103.pdf',
          },
          {
            name: 'The Market as a Social Institution',
            file: 'lesy104.pdf',
          },
          {
            name: 'Patterns of Social Inequality and Exclusion',
            file: 'lesy105.pdf',
          },
          {
            name: 'The Challenges of Cultural Diversity',
            file: 'lesy106.pdf',
          },
          {
            name: 'Suggestions for Project Work',
            file: 'lesy107.pdf',
          },
        ],
      },
      {
        id: 'SOC02',
        title: 'Social Change and Development in India',
        loc: 'sociology/lesy2dd',
        img: 'lesy2cc.jpg',
        out: 'https://www.amazon.in/NCERT-Social-Change-Development-binding/dp/B09FGWBC7K?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=da687217b64bcc6ed5ff37467289221b&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lesy2ps.pdf',
          },
          {
            name: 'Structural Change',
            file: 'lesy201.pdf',
          },
          {
            name: 'Cultural Change',
            file: 'lesy202.pdf',
          },
          {
            name: 'The Constitution and Social Change',
            file: 'lesy203.pdf',
          },
          {
            name: 'Change and Development in Rural Society',
            file: 'lesy204.pdf',
          },
          {
            name: 'Change and Development in Industrial Society',
            file: 'lesy205.pdf',
          },
          {
            name: 'Globalisation and Social Change',
            file: 'lesy206.pdf',
          },
          {
            name: 'Mass Media and Communications',
            file: 'lesy207.pdf',
          },
          {
            name: 'Social Movements',
            file: 'lesy208.pdf',
          },
        ],
      },
      {
        id: 'SOC03',
        title: 'Bhartiya Samaj',
        loc: 'sociology/lhsy1dd',
        img: 'lhsy1cc.jpg',
        out: 'https://www.amazon.in/Bhartiya-Samaj-Textbook-Sociology-Class/dp/8174507213?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=69d24c604330855d795baeb28447e0a3&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhsy1ps.pdf',
          },
          {
            name: 'Introducing Indian Society',
            file: 'lhsy101.pdf',
          },
          {
            name: 'The Demographic Structure of the Indian Society',
            file: 'lhsy102.pdf',
          },
          {
            name: 'Social Institutions: Continuity and Change',
            file: 'lhsy103.pdf',
          },
          {
            name: 'The Market as a Social Institution',
            file: 'lhsy104.pdf',
          },
          {
            name: 'Patterns of Social Inequality and Exclusion',
            file: 'lhsy105.pdf',
          },
          {
            name: 'The Challenges of Cultural Diversity',
            file: 'lhsy106.pdf',
          },
          {
            name: 'Suggestions for Project Work',
            file: 'lhsy107.pdf',
          },
        ],
      },
      {
        id: 'SOC04',
        title: 'Bharat main Samajik Parivartan aur Vikas',
        loc: 'sociology/lhsy2dd',
        img: 'lhsy2cc.jpg',
        out: 'https://www.amazon.in/Bharat-Samajik-Parivartan-Aur-Vikas/dp/8174507620?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=3ab14456f4c5308b3b141f1a43f38abb&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhsy2ps.pdf',
          },
          {
            name: 'Structural Change',
            file: 'lhsy201.pdf',
          },
          {
            name: 'Cultural Change',
            file: 'lhsy202.pdf',
          },
          {
            name: 'The Constitution and Social Change',
            file: 'lhsy203.pdf',
          },
          {
            name: 'Change and Development in Rural Society',
            file: 'lhsy204.pdf',
          },
          {
            name: 'Change and Development in Industrial Society',
            file: 'lhsy205.pdf',
          },
          {
            name: 'Globalisation and Social Change',
            file: 'lhsy206.pdf',
          },
          {
            name: 'Mass Media and Communications',
            file: 'lhsy207.pdf',
          },
          {
            name: 'Social Movements',
            file: 'lhsy208.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Chemistry',
    img: require('../assets/12.webp'),
    titles: [
      {
        id: 'CHM01',
        title: 'Chemistry I',
        loc: 'chemistry/lech1dd',
        img: 'lech1cc.jpg',
        out: 'https://www.amazon.in/Chemistry-Textbook-Part-Class-12-12085/dp/8174506489?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=60e28e804b6d4659e4ded2cadc6b10e7&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lech1ps.pdf',
          },
          {
            name: 'Solutions',
            file: 'lech101.pdf',
          },
          {
            name: 'Electrochemistry',
            file: 'lech102.pdf',
          },
          {
            name: 'Chemical Kinetics',
            file: 'lech103.pdf',
          },
          {
            name: 'The d - and f - Block Elements',
            file: 'lech104.pdf',
          },
          {
            name: 'Coordination Compounds',
            file: 'lech105.pdf',
          },
          {
            name: 'Answers',
            file: 'lech1an.pdf',
          },
          {
            name: 'Elements, their Atomic Number and Molar Mass',
            file: 'lech1a1.pdf',
          },
        ],
      },
      {
        id: 'CHM02',
        title: 'Chemistry II',
        loc: 'chemistry/lech2dd',
        img: 'lech2cc.jpg',
        out: 'https://www.amazon.in/Chemistry-Textbook-Part-Class-12086/dp/8174507167?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=4b10eef3a84e9c78fc6b54cf65af1ae7&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lech2ps.pdf',
          },
          {
            name: 'Haloalkanes and Haloarenes',
            file: 'lech201.pdf',
          },
          {
            name: 'Alcohols, Phenols Phenols and Ethers',
            file: 'lech202.pdf',
          },
          {
            name: 'Aldehydes, Ketones and Carboxylic Acids',
            file: 'lech203.pdf',
          },
          {
            name: 'Amines',
            file: 'lech204.pdf',
          },
          {
            name: 'Biomolecules',
            file: 'lech205.pdf',
          },
          {
            name: 'Answers',
            file: 'lech2an.pdf',
          },
        ],
      },
      {
        id: 'CHM03',
        title: 'Rasayan Vigyan I',
        loc: 'chemistry/lhch1dd',
        img: 'lhch1cc.jpg',
        out: 'https://www.amazon.in/NCERT-Rasayan-Vigyan-chemistry-Class/dp/B09C8VT656?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=affcc30b121b448bea056a6222ecde8f&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhch1ps.pdf',
          },
          {
            name: 'Solutions',
            file: 'lhch101.pdf',
          },
          {
            name: 'Electrochemistry',
            file: 'lhch102.pdf',
          },
          {
            name: 'Chemical Kinetics',
            file: 'lhch103.pdf',
          },
          {
            name: 'The d - and f - Block Elements',
            file: 'lhch104.pdf',
          },
          {
            name: 'Coordination Compounds',
            file: 'lhch105.pdf',
          },
          {
            name: 'Answers',
            file: 'lhch1an.pdf',
          },
          {
            name: 'Elements, their Atomic Number and Molar Mass',
            file: 'lhch1a1.pdf',
          },
        ],
      },
      {
        id: 'CHM04',
        title: 'Rasayan Vigyan II',
        loc: 'chemistry/lhch2dd',
        img: 'lhch2cc.jpg',
        out: 'https://www.amazon.in/Rasayan-Vigyan-Bhag-Textbook-Chemistry/dp/8174507582',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhch2ps.pdf',
          },
          {
            name: 'Haloalkanes and Haloarenes',
            file: 'lhch201.pdf',
          },
          {
            name: 'Alcohols, Phenols Phenols and Ethers',
            file: 'lhch202.pdf',
          },
          {
            name: 'Aldehydes, Ketones and Carboxylic Acids',
            file: 'lhch203.pdf',
          },
          {
            name: 'Amines',
            file: 'lhch204.pdf',
          },
          {
            name: 'Biomolecules',
            file: 'lhch205.pdf',
          },
          {
            name: 'Answers',
            file: 'lhch2an.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Political Science',
    img: require('../assets/13.webp'),
    titles: [
      {
        id: 'POLS01',
        title: 'Contemporary World Politics',
        loc: 'politicalscience/leps1dd',
        img: 'leps1cc.jpg',
        out: 'https://www.amazon.in/Contemporary-Politics-Textbook-Political-Science/dp/8174506934?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=2bab6a7f1d818df41e6ce094cb6d15d2&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'leps1ps.pdf',
          },
          {
            name: 'The End of Bipolarity',
            file: 'leps101.pdf',
          },
          {
            name: 'Contemporary Centres of Power',
            file: 'leps102.pdf',
          },
          {
            name: 'Contemporary South Asia',
            file: 'leps103.pdf',
          },
          {
            name: 'International Organisations',
            file: 'leps104.pdf',
          },
          {
            name: 'Security in the Contemporary World',
            file: 'leps105.pdf',
          },
          {
            name: 'Environment and Natural Resources',
            file: 'leps106.pdf',
          },
          {
            name: 'Globalisation',
            file: 'leps107.pdf',
          },
        ],
      },
      {
        id: 'POLS02',
        title: 'Politics in India Since Independence',
        loc: 'politicalscience/leps2dd',
        img: 'leps2cc.jpg',
        out: 'https://www.amazon.in/NCERT-Politics-India-Independence-science/dp/B09CHF3224?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=9ef5a4ad0ce33dd2039e3e4750aaaaba&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'leps2ps.pdf',
          },
          {
            name: 'Challenges of Nation Building',
            file: 'leps201.pdf',
          },
          {
            name: 'Era of One-party Dominance',
            file: 'leps202.pdf',
          },
          {
            name: 'Politics of Planned Development',
            file: 'leps203.pdf',
          },
          {
            name: 'India’s external relation',
            file: 'leps204.pdf',
          },
          {
            name: 'Challenges to and Restoration of the Congress System',
            file: 'leps205.pdf',
          },
          {
            name: 'The Crisis of Democratic Order',
            file: 'leps206.pdf',
          },
          {
            name: 'Regional Aspiration',
            file: 'leps207.pdf',
          },
          {
            name: 'Recent Developments in Indian Politics',
            file: 'leps208.pdf',
          },
        ],
      },
      {
        id: 'POLS03',
        title: 'Samkalin Vishwa Rajniti',
        loc: 'politicalscience/lhps1dd',
        img: 'lhps1cc.jpg',
        out: 'https://www.amazon.in/Samkalin-Vishwa-Rajniti-Textbook-Political/dp/8174507108?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=33d90e087817b950522339c32e216be1&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhps1ps.pdf',
          },
          {
            name: 'The End of Bipolarity',
            file: 'lhps101.pdf',
          },
          {
            name: 'Contemporary Centres of Power',
            file: 'lhps102.pdf',
          },
          {
            name: 'Contemporary South Asia',
            file: 'lhps103.pdf',
          },
          {
            name: 'International Organisations',
            file: 'lhps104.pdf',
          },
          {
            name: 'Security in the Contemporary World',
            file: 'lhps105.pdf',
          },
          {
            name: 'Environment and Natural Resources',
            file: 'lhps106.pdf',
          },
          {
            name: 'Globalisation',
            file: 'lhps107.pdf',
          },
        ],
      },
      {
        id: 'POLS04',
        title: 'Swatantra Bharat Mein Rajniti-II',
        loc: 'politicalscience/lhps2dd',
        img: 'lhps2cc.jpg',
        out: 'https://www.amazon.in/Swatantra-Bharat-Mein-Rajniti-Textbook/dp/8174507698',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhps2ps.pdf',
          },
          {
            name: 'Challenges of Nation Building',
            file: 'lhps201.pdf',
          },
          {
            name: 'Era of One-party Dominance',
            file: 'lhps202.pdf',
          },
          {
            name: 'Politics of Planned Development',
            file: 'lhps203.pdf',
          },
          {
            name: 'India’s external relation',
            file: 'lhps204.pdf',
          },
          {
            name: 'Challenges to and Restoration of the Congress System',
            file: 'lhps205.pdf',
          },
          {
            name: 'The Crisis of Democratic Order',
            file: 'lhps206.pdf',
          },
          {
            name: 'Regional Aspiration',
            file: 'lhps207.pdf',
          },
          {
            name: 'Recent Developments in Indian Politics',
            file: 'lhps208.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Economics',
    img: require('../assets/14.webp'),
    titles: [
      {
        id: 'ECO01',
        title: 'Introductory Microeconomics',
        loc: 'economics/leec2dd',
        img: 'leec2cc.jpg',
        out: 'https://www.amazon.in/Introductory-Microeconomics-Textbook-Economics-English/dp/B098LPYLGL?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=aab8a4ca7814a81ad93f21fc3cbbeab6&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'leec2ps.pdf',
          },
          {
            name: 'Introduction',
            file: 'leec201.pdf',
          },
          {
            name: 'Theory of Consumer Behaviour',
            file: 'leec202.pdf',
          },
          {
            name: 'Production and Costs',
            file: 'leec203.pdf',
          },
          {
            name: 'The Theory of the Firm under Perfect Competition',
            file: 'leec204.pdf',
          },
          {
            name: 'Market Equilibrium',
            file: 'leec205.pdf',
          },
        ],
      },
      {
        id: 'ECO02',
        title: 'Introductory Macroeconomics',
        loc: 'economics/leec1dd',
        img: 'leec1cc.jpg',
        out: 'https://www.amazon.in/Introductory-Macroeconomics-Textbook-Economics-Class/dp/8174507159?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=e80ada1b69ab52cf478a29e2b223a252&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'leec1ps.pdf',
          },
          {
            name: 'Introduction',
            file: 'leec101.pdf',
          },
          {
            name: 'National Income Accounting',
            file: 'leec102.pdf',
          },
          {
            name: 'Money and Banking',
            file: 'leec103.pdf',
          },
          {
            name: 'Determination of Income and Employment',
            file: 'leec104.pdf',
          },
          {
            name: 'Government Budget and the Economy',
            file: 'leec105.pdf',
          },
          {
            name: 'Open Economy Macroeconomics',
            file: 'leec106.pdf',
          },
        ],
      },
      {
        id: 'ECO03',
        title: 'Vyashthi Arthashastra- Ek Parichay',
        loc: 'economics/lhec2dd',
        img: 'lhec2cc.jpg',
        out: 'https://www.amazon.in/Vyashthi-Arthshastra-Textbook-Economics-Class/dp/8174507132?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=59756052dab741f4d7802e636b3143b7&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhec2ps.pdf',
          },
          {
            name: 'Introduction',
            file: 'lhec201.pdf',
          },
          {
            name: 'Theory of Consumer Behaviour',
            file: 'lhec202.pdf',
          },
          {
            name: 'Production and Costs',
            file: 'lhec203.pdf',
          },
          {
            name: 'The Theory of the Firm under Perfect Competition',
            file: 'lhec204.pdf',
          },
          {
            name: 'Market Equilibrium',
            file: 'lhec205.pdf',
          },
        ],
      },
      {
        id: 'ECO04',
        title: 'Samashty Arthshastra Ek Parichay',
        loc: 'economics/lhec1dd',
        img: 'lhec1cc.jpg',
        out: 'https://www.amazon.in/Samashti-Arthashashtra-Ek-Parichaya-Class/dp/B071F73S8M?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=ea229d052ed4771959c36da914c199bc&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhec1ps.pdf',
          },
          {
            name: 'Introduction',
            file: 'lhec101.pdf',
          },
          {
            name: 'National Income Accounting',
            file: 'lhec102.pdf',
          },
          {
            name: 'Money and Banking',
            file: 'lhec103.pdf',
          },
          {
            name: 'Determination of Income and Employment',
            file: 'lhec104.pdf',
          },
          {
            name: 'Government Budget and the Economy',
            file: 'lhec105.pdf',
          },
          {
            name: 'Open Economy Macroeconomics',
            file: 'lhec106.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Business Studies',
    img: require('../assets/15.webp'),
    titles: [
      {
        id: 'BUS01',
        title: 'Business Studies I',
        loc: 'businessstudies/lebs1dd',
        img: 'lebs1cc.jpg',
        out: 'https://www.amazon.in/Business-Studies-Part-Principles-Management/dp/8174506977?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=561ca2072241384b45a3537eba45cc03&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lebs1ps.pdf',
          },
          {
            name: 'Nature and Significance of Management',
            file: 'lebs101.pdf',
          },
          {
            name: 'Principles of Management',
            file: 'lebs102.pdf',
          },
          {
            name: 'Business Environment',
            file: 'lebs103.pdf',
          },
          {
            name: 'Planning',
            file: 'lebs104.pdf',
          },
          {
            name: 'Organising',
            file: 'lebs105.pdf',
          },
          {
            name: 'Staffing',
            file: 'lebs106.pdf',
          },
          {
            name: 'Directing',
            file: 'lebs107.pdf',
          },
          {
            name: 'Controlling',
            file: 'lebs108.pdf',
          },
        ],
      },
      {
        id: 'BUS02',
        title: 'Business Studies II',
        loc: 'businessstudies/lebs2dd',
        img: 'lebs2cc.jpg',
        out: 'https://www.amazon.in/Business-Studies-Part-Finance-Marketing/dp/8174507566?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=5a94f16f6c4fcd50d9e6b4cc92e9da75&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lebs2ps.pdf',
          },
          {
            name: 'Financial Management',
            file: 'lebs201.pdf',
          },
          {
            name: 'Marketing',
            file: 'lebs202.pdf',
          },
          {
            name: 'Consumer Protection',
            file: 'lebs203.pdf',
          },
        ],
      },
      {
        id: 'BUS03',
        title: 'Vyavasai Adhyan I',
        loc: 'businessstudies/lhbs1dd',
        img: 'lhbs1cc.jpg',
        out: 'https://www.amazon.in/Vyavsay-Adhyan-Bhag-Textbook-Business/dp/8174507205?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=fe1d63d7a6b4905cb3a9b1928365fc58&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhbs1ps.pdf',
          },
          {
            name: 'Nature and Significance of Management',
            file: 'lhbs101.pdf',
          },
          {
            name: 'Principles of Management',
            file: 'lhbs102.pdf',
          },
          {
            name: 'Business Environment',
            file: 'lhbs103.pdf',
          },
          {
            name: 'Planning',
            file: 'lhbs104.pdf',
          },
          {
            name: 'Organising',
            file: 'lhbs105.pdf',
          },
          {
            name: 'Staffing',
            file: 'lhbs106.pdf',
          },
          {
            name: 'Directing',
            file: 'lhbs107.pdf',
          },
          {
            name: 'Controlling',
            file: 'lhbs108.pdf',
          },
        ],
      },
      {
        id: 'BUS04',
        title: 'Vyavasai Adhyan II',
        loc: 'businessstudies/lhbs2dd',
        img: 'lhbs2cc.jpg',
        out: 'https://www.amazon.in/Vyavsay-Adhyayan-Bhag-Textbook-Business/dp/B01LC78WMC?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=aa1301095ec678299de140b8b9684c26&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhbs2ps.pdf',
          },
          {
            name: 'Financial Management',
            file: 'lhbs201.pdf',
          },
          {
            name: 'Marketing',
            file: 'lhbs202.pdf',
          },
          {
            name: 'Consumer Protection',
            file: 'lhbs203.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Home Science',
    img: require('../assets/16.webp'),
    titles: [
      {
        id: 'HSCI01',
        title: 'Human Ecology and Family Sciences Part I',
        loc: 'homescience/lehe1dd',
        img: 'lehe1cc.jpg',
        out: 'https://www.amazon.in/Human-Ecology-Family-Sciences-Class/dp/935007768X?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=89e478b2745f524ca8c4d18a2a6ad29b&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lehe1ps.pdf',
          },
          {
            name: 'Work, Livelihood and Career',
            file: 'lehe101.pdf',
          },
          {
            name: 'Nutrition, Food Science And Technology',
            file: 'lehe102.pdf',
          },
          {
            name: 'Public Nutrition And Health',
            file: 'lehe103.pdf',
          },
          {
            name: 'Food Processing And Technology',
            file: 'lehe104.pdf',
          },
          {
            name: 'Food Quality and Food Safety',
            file: 'lehe105.pdf',
          },
          {
            name: 'Human Development And Family Studies',
            file: 'lehe106.pdf',
          },
          {
            name: 'Management of Support Services, Institutions and Programmes for Children, Youth and Elderly',
            file: 'lehe107.pdf',
          },
        ],
      },
      {
        id: 'HSCI02',
        title: 'Human Ecology and Family Sciences Part II',
        loc: 'homescience/lehe2dd',
        img: 'lehe2cc.jpg',
        out: 'https://www.amazon.in/Human-Ecology-Family-Sciences-Part/dp/9350077698?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=b9f2ba9bd83f2e79db3ad8cdd04fb60d&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lehe2ps.pdf',
          },
          {
            name: 'Fabric And Apparel',
            file: 'lehe201.pdf',
          },
          {
            name: 'Fashion Design and Merchandising',
            file: 'lehe202.pdf',
          },
          {
            name: 'Care and Maintenance of Fabrics in Institutions',
            file: 'lehe203.pdf',
          },
          {
            name: 'Resource Management',
            file: 'lehe204.pdf',
          },
          {
            name: 'Consumer Education and Protection',
            file: 'lehe205.pdf',
          },
          {
            name: 'Communication And Extension',
            file: 'lehe206.pdf',
          },
          {
            name: 'Corporate Communication And Public Relations',
            file: 'lehe207.pdf',
          },
        ],
      },
      {
        id: 'HSCI03',
        title: 'Manav Paristhitik avam Parivar Vigyan Bhag 1',
        loc: 'homescience/lehh1dd',
        img: 'lehh1cc.jpg',
        out: 'https://www.amazon.in/PARIVARTAK-PARIVAR-VIGYAN-SCIENCE-TAXTBOOK/dp/9352920015?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=7a897c273348e01ecd7ed607f53eea2d&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lehh1ps.pdf',
          },
          {
            name: 'Work, Livelihood and Career',
            file: 'lehh101.pdf',
          },
          {
            name: 'Nutrition, Food Science And Technology',
            file: 'lehh102.pdf',
          },
          {
            name: 'Public Nutrition And Health',
            file: 'lehh103.pdf',
          },
          {
            name: 'Food Processing And Technology',
            file: 'lehh104.pdf',
          },
          {
            name: 'Food Quality and Food Safety',
            file: 'lehh105.pdf',
          },
          {
            name: 'Human Development And Family Studies',
            file: 'lehh106.pdf',
          },
          {
            name: 'Management of Support Services, Institutions and Programmes for Children, Youth and Elderly',
            file: 'lehh107.pdf',
          },
        ],
      },
      {
        id: 'HSCI04',
        title: 'Manav Paristhitiki avam Parivar Vigyan Bhag 2',
        loc: 'homescience/lehh2dd',
        img: 'lehh2cc.jpg',
        out: 'https://www.amazon.in/Science-Manav-Paristhitiki-Parivar-Vigyan/dp/B0D76QCS26?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=95f1531f5192ceaec961014ed6f9216a&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lehh2ps.pdf',
          },
          {
            name: 'Fabric And Apparel',
            file: 'lehh201.pdf',
          },
          {
            name: 'Fashion Design and Merchandising',
            file: 'lehh202.pdf',
          },
          {
            name: 'Care and Maintenance of Fabrics in Institutions',
            file: 'lehh203.pdf',
          },
          {
            name: 'Resource Management',
            file: 'lehh204.pdf',
          },
          {
            name: 'Consumer Education and Protection',
            file: 'lehh205.pdf',
          },
          {
            name: 'Communication And Extension',
            file: 'lehh206.pdf',
          },
          {
            name: 'Corporate Communication And Public Relations',
            file: 'lehh207.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Creative Writing and Translation',
    img: require('../assets/17.webp'),
    titles: [
      {
        id: 'CWT01',
        title: 'Srijan-II',
        loc: 'creativewritingandtranslation/khsr2dd',
        img: 'khsr2cc.jpg',
        out: 'https://www.amazon.in/Srijan-2-Textbook-Creative-Translation-Class-12-12132/dp/9350073013?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=4b4f8f810195292d797d097671dd64f7&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'khsr2ps.pdf',
          },
          {
            name: 'Literary Writing',
            file: 'khsr201.pdf',
          },
          {
            name: 'Media Writing',
            file: 'khsr202.pdf',
          },
          {
            name: 'The Process of Translation',
            file: 'khsr203.pdf',
          },
          {
            name: 'Editing',
            file: 'khsr204.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Fine Art',
    img: require('../assets/18.webp'),
    titles: [
      {
        id: 'FA01',
        title: 'An Introduction to Indian Art Part-II',
        loc: 'fineart/lefa1dd',
        img: 'lefa1cc.jpg',
        out: 'https://www.amazon.in/Introduction-Indian-Art-Part-Class/dp/9352923375?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=7a2338c3dfba36a71aa801a609dd8d1b&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lefa1ps.pdf',
          },
          {
            name: 'The Manuscript Painting Tradition',
            file: 'lefa101.pdf',
          },
          {
            name: 'The Rajasthani Schools of Painting',
            file: 'lefa102.pdf',
          },
          {
            name: 'The Mughal School of Miniature Painting',
            file: 'lefa103.pdf',
          },
          {
            name: 'The Deccani Schools of Painting',
            file: 'lefa104.pdf',
          },
          {
            name: 'The Pahari Schools of Painting',
            file: 'lefa105.pdf',
          },
          {
            name: 'The Bengal School and Cultural Nationalism',
            file: 'lefa106.pdf',
          },
          {
            name: 'The Modern Indian Art',
            file: 'lefa107.pdf',
          },
          {
            name: 'The Living Art Traditions of India',
            file: 'lefa108.pdf',
          },
        ],
      },
      {
        id: 'FA02',
        title: 'Bhartiya Kala ka Itihaas Bhag 2',
        loc: 'fineart/lhfa1dd',
        img: 'lhfa1cc.jpg',
        out: 'https://www.flipkart.com/bhartiya-kala-ka-parichaya-bhag-2-paperback-hindi-ncert-expert/p/itmc6c20abcb4ab8?pid=RBKGKBHDYQ86SXXK',
        chapters: [
          {
            name: 'Prelims',
            file: 'lhfa1ps.pdf',
          },
          {
            name: 'The Manuscript Painting Tradition',
            file: 'lhfa101.pdf',
          },
          {
            name: 'The Rajasthani Schools of Painting',
            file: 'lhfa102.pdf',
          },
          {
            name: 'The Mughal School of Miniature Painting',
            file: 'lhfa103.pdf',
          },
          {
            name: 'The Deccani Schools of Painting',
            file: 'lhfa104.pdf',
          },
          {
            name: 'The Pahari Schools of Painting',
            file: 'lhfa105.pdf',
          },
          {
            name: 'The Bengal School and Cultural Nationalism',
            file: 'lhfa106.pdf',
          },
          {
            name: 'The Modern Indian Art',
            file: 'lhfa107.pdf',
          },
          {
            name: 'The Living Art Traditions of India',
            file: 'lhfa108.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Computer Science',
    img: require('../assets/19.webp'),
    titles: [
      {
        id: 'CS01',
        title: 'Computer Science',
        loc: 'computerscience/lecs1dd',
        img: 'lecs1cc.jpg',
        out: 'https://www.amazon.in/CLASS-12-TEXTBOOK-COMPUTER-SCIENCE/dp/B09WLSH221?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=2c0b09901931ff76c6581cab958808d6&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lecs1ps.pdf',
          },
          {
            name: 'Exception Handling in Python',
            file: 'lecs101.pdf',
          },
          {
            name: 'File Handling in Python',
            file: 'lecs102.pdf',
          },
          {
            name: 'Stack',
            file: 'lecs103.pdf',
          },
          {
            name: 'Queue',
            file: 'lecs104.pdf',
          },
          {
            name: 'Sorting',
            file: 'lecs105.pdf',
          },
          {
            name: 'Searching',
            file: 'lecs106.pdf',
          },
          {
            name: 'Understanding Data',
            file: 'lecs107.pdf',
          },
          {
            name: 'Database Concepts',
            file: 'lecs108.pdf',
          },
          {
            name: 'Structured Query Language (SQL)',
            file: 'lecs109.pdf',
          },
          {
            name: 'Computer Networks',
            file: 'lecs110.pdf',
          },
          {
            name: 'Data Communication',
            file: 'lecs111.pdf',
          },
          {
            name: 'Security Aspects',
            file: 'lecs112.pdf',
          },
          {
            name: 'Project Based Learning',
            file: 'lecs113.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Informatics Practices',
    img: require('../assets/20.webp'),
    titles: [
      {
        id: 'INP01',
        title: 'Informatics Practices',
        loc: 'informaticspractices/leip1dd',
        img: 'leip1cc.jpg',
        out: 'https://www.amazon.in/CLASS-INFORMATICS-PRACTICES-Texbook-NCERT/dp/9352923618?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=47f9418da2ebc736fc1736d2dddeb859&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'leip1ps.pdf',
          },
          {
            name: 'Querying and SQL Functions',
            file: 'leip101.pdf',
          },
          {
            name: 'Data Handling Using Pandas - I',
            file: 'leip102.pdf',
          },
          {
            name: 'Data Handling using Pandas - II',
            file: 'leip103.pdf',
          },
          {
            name: 'Plotting Data using Matplotlib',
            file: 'leip104.pdf',
          },
          {
            name: 'Internet and Web',
            file: 'leip105.pdf',
          },
          {
            name: 'Societal Impacts',
            file: 'leip106.pdf',
          },
          {
            name: 'Project Based Learning',
            file: 'leip107.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Biotechnology',
    img: require('../assets/21.webp'),
    titles: [
      {
        id: 'BIOT01',
        title: 'Biotechnology',
        loc: 'biotechnology/lebt1dd',
        img: 'lebt1cc.jpg',
        out: 'https://www.amazon.in/BIOTECHNOLOGY-Textbook-Class-12150-NCERT/dp/B0CFTT4GHQ?&linkCode=ll1&tag=wwwwbaccessor-21&linkId=4742abc9707ebf3fae570088788d35c3&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lebt1ps.pdf',
          },
          {
            name: 'Recombinant DNA Technology',
            file: 'lebt101.pdf',
          },
          {
            name: 'Host–Vector System',
            file: 'lebt102.pdf',
          },
          {
            name: 'Gene Cloning',
            file: 'lebt103.pdf',
          },
          {
            name: 'Applications of Recombinant DNA Technology',
            file: 'lebt104.pdf',
          },
          {
            name: 'Genome Engineering',
            file: 'lebt105.pdf',
          },
          {
            name: 'Microbial, Plant, Animal Cell, Organ Cultures and Bioprocessing',
            file: 'lebt106.pdf',
          },
          {
            name: 'Plant Tissue Culture',
            file: 'lebt107.pdf',
          },
          {
            name: 'Animal Cell Culture',
            file: 'lebt108.pdf',
          },
          {
            name: 'Stem Cell Culture and Organ Culture',
            file: 'lebt109.pdf',
          },
          {
            name: 'Bioprocessing and Biomanufacturing',
            file: 'lebt110.pdf',
          },
          {
            name: 'Bioremediation',
            file: 'lebt111.pdf',
          },
          {
            name: 'Recent Innovations in Biotechnology and Entrepreneurship',
            file: 'lebt112.pdf',
          },
          {
            name: 'Entrepreneurship',
            file: 'lebt113.pdf',
          },
        ],
      },
    ],
  },
  {
    title: 'Sangeet',
    img: require('../assets/22.webp'),
    titles: [
      {
        id: 'SNG01',
        title: 'Tabla evam Pakhawaj',
        loc: 'sangeet/lstp1dd',
        img: 'lstp1cc.jpg',
        out: 'https://amzn.to/4dBqxwP',
        chapters: [
          {
            name: 'Prelims',
            file: 'lstp1ps.pdf',
          },
          {
            name: 'ताल की अवधारणा तथा संगीत में इसका महत',
            file: 'lstp101.pdf',
          },
          {
            name: 'संगीत लिपि पद्धति का सक्षिप्‍त इतिहास',
            file: 'lstp102.pdf',
          },
          {
            name: 'तबला और पखावज के स्‍वतंत्र वादन में बंदिशों का महत्‍व',
            file: 'lstp103.pdf',
          },
          {
            name: 'विभिन् न वाद्यों का परिचय',
            file: 'lstp104.pdf',
          },
          {
            name: 'तबला एव पखावज वाद्य की उत्पत्ति तथा विकास',
            file: 'lstp105.pdf',
          },
          {
            name: 'कर्नाटक ताल–लिपि पद्धति की अवधारणा',
            file: 'lstp106.pdf',
          },
          {
            name: 'जीवन परिचय',
            file: 'lstp107.pdf',
          },
        ],
      },
      {
        id: 'SNG02',
        title: 'Hindustani Sangeet Gayan Evam Vaadan',
        loc: 'sangeet/lsgv1dd',
        img: 'lsgv1cc.jpg',
        out: 'https://www.amazon.in/Hindustani-Sangeet-Gayan-Vaadan-Textbook/dp/B0CXTL2FVH?source=ps-sl-shoppingads-lpcontext&psc=1&smid=A2GRTE0ZJPT88G&linkCode=ll1&tag=wwwwbaccessor-21&linkId=db4f1f4423d731874b624367e3fc5f24&language=en_IN&ref_=as_li_ss_tl',
        chapters: [
          {
            name: 'Prelims',
            file: 'lsgv1ps.pdf',
          },
          {
            name: 'भारतीय संगीत का इतिहास',
            file: 'lsgv101.pdf',
          },
          {
            name: 'हमारे प्राचीन ग्रथ',
            file: 'lsgv102.pdf',
          },
          {
            name: 'हिंदस्‍तानी संगीत के पारिभाषिक शब्‍द',
            file: 'lsgv103.pdf',
          },
          {
            name: 'प्राचीन एवं आधुनिक गायन शैलिया',
            file: 'lsgv104.pdf',
          },
          {
            name: 'राग वर्गीकरण',
            file: 'lsgv105.pdf',
          },
          {
            name: 'राग परिचय एवं बंदिशें',
            file: 'lsgv106.pdf',
          },
          {
            name: 'ह‍िंदस्‍तानी संगीत में वाद्य यत',
            file: 'lsgv107.pdf',
          },
          {
            name: 'प्रमुख तालों के ठेके एव लयकारी',
            file: 'lsgv108.pdf',
          },
          {
            name: 'संगीत के प्रमुख कलाकारों का परिचय व योगदान',
            file: 'lsgv109.pdf',
          },
        ],
      },
    ],
  },
];

export default SUBJECTS;
