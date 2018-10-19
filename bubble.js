function dataLoop() {
  elements = document.getElementsByTagName('svg')
  for (let i = 0; i < elements.length; i++) { 
    elements[i].remove()
  }
  var bubbles = [
    { "name": 'first', "size": 3 },
    { "name": 'second', "size": 7 },
    { "name": 'third', "size": 5 },
    { "name": 'fourth', "size": 2 },
    { "name": 'fifth', "size": 9 },
  ]
  var words = ['legation', 'unpick', 'paring', 'kilometres', 'algal', 'depot', 'fortunately', 'carves', 'cat', 'antagonised', 'strategic', 'truisms', 'pyrite', 'fluttery', 'topheavy', 'premised', 'jailers', 'trimodal', 'compulsorily', 'overproduction', 'unrecoverable', 'rial', 'achings', 'designs', 'remastering', 'mercenary', 'lotus', 'thieved', 'abrasions', 'indifference', 'particular', 'downpour', 'jumpstarting', 'paragraphs', 'intifada', 'whines', 'upsidedown', 'schoolgirl', 'thereunder', 'guppies', 'finis', 'riveted', 'fibreboard', 'likable', 'quadrupole', 'estimators', 'chastely', 'adversaries', 'raindrop', 'shotguns', 'bilharzia', 'hebrew', 'arguments', 'weedier', 'bloodstream', 'smokiest', 'equations', 'graters', 'chemotherapeutic', 'kneeling', 'restructured', 'theatricals', 'genitives', 'eiderdown', 'ransoming', 'inculcating', 'byword', 'posthumously', 'strings', 'joggers', 'bribed', 'rerun', 'polygynous', 'guardhouse', 'entropy', 'roundup', 'transplanted', 'shotgun', 'dog', 'cypriot', 'lebanon', 'incrimination', 'decontamination', 'elbow', 'coastline', 'multimillion', 'beginning', 'alternation', 'enfranchising', 'metallurgy', 'agio', 'panelling', 'pummel', 'dilute', 'oppositional', 'leafed', 'flexibility', 'stockpiles', 'frustum', 'cauliflower', 'glowers', 'idiopathic', 'give', 'argent', 'composers', 'psalter', 'shoestrings', 'horsehair', 'clays', 'cooperate', 'hayloft', 'civilly', 'satirical', 'plenipotentiary', 'kirk', 'amour', 'attribution', 'sash', 'violence', 'mastiff', 'beverage', 'expositions', 'defenestration', 'tester', 'disagreed', 'disproportionate', 'brandishes', 'callow', 'couture', 'work', 'constrictive', 'pool', 'princess', 'anaerobic', 'predictably', 'belonged', 'boo', 'halo', 'hysterically', 'hooliganism', 'helpfully', 'griefs', 'reassess', 'unquantified', 'oscillators', 'imprisoned', 'extrapolated', 'margin', 'weltering', 'note', 'underwriter', 'jazziest', 'sicker', 'gypsies', 'pensioned', 'trespassed', 'absorbs', 'rudders', 'moisturisers', 'atop', 'wins', 'inculcation', 'exemplified', 'hexane', 'wheelwrights', 'solver', 'sewerrat', 'birthright', 'bier', 'groggiest', 'halfheartedness', 'secretariat', 'inexplicably', 'consecrate', 'quotation', 'mutton', 'cystine', 'olms', 'lifeblood', 'breeders', 'executable', 'bouncy', 'icebox', 'gels', 'amphibian', 'earwigs', 'chatty', 'retaliates', 'coloury', 'physiotherapy', 'commentary', 'shapes', 'hotelier', 'rationalists', 'squirming', 'executor', 'yard', 'friendships', 'statistic', 'everting', 'rebutting', 'insulted', 'overinflated', 'irishmen', 'nods', 'belgium', 'fumed', 'scraped', 'epidemiologist', 'novice', 'emanate', 'vogue', 'sleuth', 'stallholders', 'milord', 'readjusted', 'exacted', 'blustering', 'heartening', 'malicious', 'hut', 'fallen', 'clownish', 'loom', 'thesaurus', 'symmetrisation', 'sampling', 'bits', 'veneer', 'divides', 'twiddly', 'redistribution', 'connecting', 'chauvinist', 'descends', 'parentage', 'peels', 'catchiest', 'disgraceful', 'fluctuation', 'balcony', 'dumbest', 'squibs', 'presides', 'zebra', 'tureen', 'foxhunting', 'energy', 'divination', 'sucking', 'curtail', 'platefuls', 'octagonal', 'skies', 'unlikeliness', 'guard', 'corroboratory', 'socioeconomic', 'steamboat', 'erratically', 'cashes', 'interpolations', 'acoustical', 'cardiologist', 'plates', 'flooring', 'radically', 'shrew', 'trivia', 'mothers', 'need', 'beatify', 'dribbles', 'refundable', 'smother', 'dentist', 'genial', 'wipes', 'goad', 'flimsiest', 'skirt', 'interviewee', 'structuralists', 'debutants', 'penned', 'flatterers', 'tailpiece', 'procession', 'pixels', 'posthumously', 'freon', 'atrocious', 'byword', 'channelled', 'irrevocable', 'rescaled', 'disinfection', 'usefully', 'fanfares', 'perspicuity', 'keypad', 'renter', 'carbonates', 'emulsion', 'irrationally', 'contact', 'chinless', 'dished', 'keyboards', 'violator', 'jauntiest', 'disapproved', 'lancet', 'contoured', 'guarantors', 'harness', 'chlorine', 'learnable', 'poll', 'adulterating', 'philosophic', 'umpteenth', 'cleanest', 'portals', 'warping', 'treks', 'earaches', 'reducers', 'antennae', 'fluvial', 'trickles', 'bitmap', 'envelops', 'caracals', 'reside', 'chemical', 'petrifying', 'boat', 'sheriff', 'elysee', 'dishonoured', 'somalia', 'coil', 'pulley', 'wunderkind', 'sacrum', 'provisions', 'billowed', 'ergs', 'cookbooks', 'schism', 'cornw', 'appeasers', 'pruners', 'leftover', 'superimposes', 'confirms', 'adulterated', 'boarders', 'popes', 'breakage', 'illiquid', 'insider', 'debited', 'mistreat', 'cartridges', 'glens', 'applicants', 'alacrity', 'amendment', 'malformed', 'computerliterate', 'rawest', 'transgressor', 'jetties', 'uneasiest', 'traduced', 'tranquillise', 'deodorised', 'reasserts', 'doctoral', 'entangle', 'sheep', 'exes', 'texts', 'restructures', 'drearier', 'flack', 'withering', 'oscillated', 'whiled', 'adult', 'antic', 'detesting', 'shipmate', 'consequentially', 'paternally', 'gnats', 'storming', 'felled', 'patronesses', 'scrupulousness', 'linkage', 'otherwise', 'expires', 'hotel', 'substantiation', 'senora', 'mustier', 'executors', 'technologies', 'topicality', 'inflexion', 'fingernails', 'earner', 'elated', 'pilloried', 'hirer', 'disparaged', 'punks', 'slushes', 'disgusting', 'allegories', 'refloat', 'hairraising', 'driveins', 'frittering', 'amateurish', 'libretto', 'upbraiding', 'monadic', 'basin', 'hereupon', 'sherlock', 'mistletoe', 'quilt', 'imprecations', 'infrared', 'outfit', 'troops', 'adherent', 'fortifications', 'summations', 'subtended', 'god', 'ureters', 'cardboard', 'told', 'ownership', 'stiflingly', 'obsess', 'croaked', 'trustful', 'indication', 'immured', 'renewing', 'touchandgo', 'crushing', 'default', 'politburo', 'nightwear', 'foreclosed', 'calligrapher', 'openheart', 'steers', 'elation', 'sonorous', 'babbling', 'pap', 'consecutively', 'corned', 'punishable', 'body', 'reanimated', 'marigold', 'replicator', 'nullifying', 'attentively', 'applecart', 'orators', 'collier', 'wantonly', 'amortised', 'bengal', 'crafted', 'unbeliever', 'grunts', 'polychromatic', 'flautist', 'trampling', 'peddler', 'debones', 'insurrectionary', 'salt', 'cloudiest', 'code', 'difficulties', 'contemptibly', 'zithers', 'lovelier', 'conveys', 'fairies', 'industrialised', 'dimmed', 'equilibrating', 'passage', 'dresser', 'inseparable', 'headdresses', 'soothsayers', 'planetoids', 'goths', 'ampler', 'playroom', 'skyscrapers', 'fireworks', 'integrationist', 'pickling', 'jilt', 'neuroscientists', 'bilaterally', 'platypuses', 'flank', 'encode', 'turmoils', 'visiting', 'ionising', 'hangglide', 'raven', 'wits', 'royalists', 'encircles', 'signally', 'armistice', 'obscurity', 'wreathed', 'london', 'secondbest', 'rationalists', 'tumult', 'gawk', 'fetid', 'woofer', 'morphologies', 'desiderata', 'elusively', 'inconspicuous', 'banality', 'digs', 'sweetness', 'wishes', 'cramped', 'mumps', 'familiarities', 'stipends', 'corduroy', 'poster', 'capitalises', 'dilutions', 'recruiters', 'sought', 'documented', 'jamaican', 'oppositional', 'extrinsic', 'shave', 'canines', 'venom', 'copyists', 'stallion', 'mammalian', 'indicts', 'paddy', 'printable', 'huntergatherer', 'slat', 'dieted', 'clears', 'saccharin', 'hearers', 'facilitates', 'roadway', 'minnows', 'talkback', 'drooled', 'cornflowers', 'fouler', 'hanging', 'centroid', 'paradoxes', 'fiver', 'tessellated', 'flapped', 'drawees', 'factionalism', 'unperceived', 'animated', 'astrolabe', 'operates', 'unpredictably', 'unscrewed', 'amazons', 'molds', 'stable', 'infilling', 'progenitors', 'privileging', 'tricksters', 'retraces', 'cogitative', 'housebreaking', 'browbeaten', 'elucidation', 'hardliner', 'rebalanced', 'brainstorms', 'kaftans', 'cheeseboard', 'delta', 'rendered', 'fed', 'enrobe', 'coalfields', 'forum', 'learned', 'northmen', 'contribute', 'mature', 'intruded', 'baronet', 'pertinaciously', 'prissy', 'hocus', 'accentuating', 'barkers', 'conferring', 'hotdog', 'evaporation', 'affliction', 'whirr', 'streakiest', 'contradictory', 'flashy', 'capacity', 'septicaemia', 'sneezes', 'jurymen', 'divergence', 'discuss', 'unactivated', 'schizophrenics', 'reorientates', 'casters', 'winged', 'gists', 'dislocation', 'exploded', 'exquisitely', 'enshrined', 'companionable', 'bumptious', 'whys', 'humblest', 'tessellations', 'ballpoint', 'plaster', 'springclean', 'unreliability', 'skimp', 'incorrigibly', 'aircraft', 'irreparable', 'tightening', 'expert', 'joyrider', 'descends', 'nomenclature', 'algiers', 'degrease', 'coachload', 'averred', 'rarer', 'balder', 'ecumenism', 'lincoln', 'undermanned', 'hearings', 'poverty', 'seacow', 'flukey', 'buckling', 'incorrigible', 'proprietorially', 'pressured', 'constructivism', 'darned', 'claret', 'glimmering', 'gentility', 'geranium', 'writhe', 'bluntness', 'unsettle', 'suppers', 'percentage', 'confections', 'dodges', 'shopkeeping', 'gentile', 'somehow', 'buff', 'vermin', 'flyaway', 'shriek', 'sitcom', 'optimisers', 'northerners', 'outfits', 'defector', 'boxy', 'zillions', 'warty', 'judiciously', 'labourers', 'diagnosable', 'injustice', 'antibiotics', 'watcher', 'twirls', 'tiers', 'backed', 'imputed', 'skirmish', 'kaleidoscopic', 'gauging', 'entangling', 'loaded', 'raider', 'helmsman', 'propane', 'prolifically', 'hammocks', 'deflects', 'capitalises', 'condemn', 'goodhope', 'regressions', 'upfront', 'untruthfully', 'divert', 'conservatories', 'brushy', 'dauber', 'misting', 'matrimony', 'canadian', 'teamwork', 'predicting', 'syrian', 'quirky', 'thickened', 'culmination', 'finicky', 'portcullis', 'restock', 'bonuses', 'lordly', 'britons', 'mouse', 'pry', 'porosity', 'contra', 'debase', 'criminology', 'winches', 'aggrieved', 'documentation', 'overreaching', 'things', 'triggerhappy', 'abysmally', 'warring', 'takeaway', 'proxy', 'strewed', 'disciplinarians', 'teetotaller', 'unpressurised', 'encrypting', 'milord', 'delays', 'metro', 'venturing', 'tremble', 'conception', 'understating', 'printed', 'propertied', 'altimeter', 'nonfunctional', 'agony', 'beefcake', 'bobbed', 'wandered', 'foster', 'cashew', 'imaginations', 'unanticipated', 'ostrich', 'approximating', 'assent', 'bowstring', 'flowerless', 'rouses', 'summarised', 'ericas', 'abstainers', 'spuriously', 'absenting', 'mauls', 'rotated', 'wooded', 'unconstitutionally', 'lounging', 'kerning', 'voyaged', 'bookbinding', 'steeds', 'wrinkle', 'entombed', 'disentangle', 'liveable', 'transhipment', 'limited', 'beet', 'pilgrimage', 'religions', 'immunological', 'reminiscing', 'grasshopper', 'africa', 'indignation', 'industrialise', 'dedicating', 'backstreets', 'quintessentially', 'greet', 'palliatives', 'codes', 'milliner', 'petrochemicals', 'wether', 'sulphate', 'condor', 'purposely', 'propounded', 'conservations', 'emailed', 'prediction', 'complacency', 'reactivates', 'waive', 'disdainfully', 'summers', 'indulger', 'bud', 'taxonomy', 'unfavourably', 'pained', 'debuggers', 'interfaced', 'flyaway', 'missions', 'unfit', 'dropping', 'careers', 'fledgling', 'moderner', 'wellread', 'squeal', 'sought', 'widened', 'declines', 'abreast', 'seconders', 'builders', 'exaction', 'sled', 'rebuild', 'drainpipe', 'dubbing', 'unshackled', 'adder', 'underwent', 'disputation', 'isomorph', 'chews', 'reliable', 'memorably', 'bound', 'bluntest', 'intimating', 'columnists', 'refining', 'bounding', 'shoring', 'brigand', 'luminous', 'diplexers', 'mackintoshes', 'southbound', 'disconsolation', 'precisions', 'inflammable', 'paranoiacs', 'drier', 'connoisseurs', 'pressing', 'impenetrably', 'substantiate', 'reconnaissance', 'broaden', 'chirped', 'violate', 'unhampered', 'optimising', 'storeys', 'tobago', 'pacifism', 'cubicles', 'byelection', 'baroque', 'alcohols', 'mudlarks', 'lodged', 'leash', 'skullduggery', 'weekend', 'amortise', 'oozed', 'aunt', 'themas', 'guidance', 'briefing', 'tolerated', 'autonomy', 'cherubic', 'aching', 'electrocardiogram', 'coffees', 'rearranges', 'displacement', 'known', 'mathematics', 'macroeconomic', 'panzer', 'seditious', 'territorial', 'creaks', 'unmemorable', 'locating', 'proportionality', 'lighthouse', 'sour', 'ottoman', 'acknowledgements', 'vibrational', 'malaise', 'binding', 'bavarian', 'eligibility', 'inhaling', 'response', 'epidemics', 'freights', 'outings', 'discounting', 'circulars', 'asserting', 'devastating', 'acrimonious', 'beaters', 'melons', 'specifies', 'smuggle', 'feasible', 'repetition', 'opportunist', 'unwontedly', 'scudded', 'visibility', 'knowingly', 'microscopes', 'goodwill', 'sevenpence', 'chromosome', 'middleaged', 'conversed', 'secretive', 'minimum']
  for (var i = 0; i < 5; i++) {
    var randMath = Math.round(Math.random() * (999 - 0) + 0)
    bubbles[i].name = words[randMath]
    bubbles[i].size = Math.random() * (10 - 1) + 1;
  }



  // Sample Data
  var data = {
    "name": "flare",
    "children": [
      {
        "name": "analytics",
        "children": [
          {
            "name": "cluster",
            "children": bubbles
          }
        ]
      }
    ]
  }
  var diameter = 550,
    format = d3.format(",d"),
    color = d3.scaleOrdinal(d3.schemeCategory10);

  var bubble = d3.pack()
    .size([diameter, diameter])
    .padding(25);

  var svg = d3.select("body").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

  var root = d3.hierarchy(classes(data))
    .sum(function (d) { return d.value; })
    .sort(function (a, b) { return b.value - a.value; });

  bubble(root);
  var node = svg.selectAll(".node")
    .data(root.children)
    .enter().append("g")
    .attr("class", "node")
    .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("title")
    .text(function (d) { return d.data.className + ": " + format(d.value); });

  node.append("circle")
    .attr("r", function (d) { return d.r; })
    .style("fill", function (d) {
      return color(d.data.packageName);
    });

  node.append("text")
    .attr("dy", ".3em")
    .style("text-anchor", "middle")
    .text(function (d) { return d.data.className.substring(0, d.r / 3); });


  // Returns a flattened hierarchy containing all leaf nodes under the root.
  function classes(root) {
    var classes = [];

    function recurse(name, node) {
      if (node.children) node.children.forEach(function (node) { recurse(node.name, node); });
      else classes.push({ packageName: name, className: node.name, value: node.size });
    }

    recurse(null, root);
    return { children: classes };
  }

  d3.select(self.frameElement).style("height", diameter + "px");

  // CUSTOM:

  // To make the growing and shrinking look cool and fluid
  const transition = (selection) => {
    selection.transition()
      .duration(500)
      .delay((d, i) => {
        return i * 35 + 35
      })
      .transition()
      .duration(300);
  };



  // var data = {
  //   "name": "flare",
  //   "children": [
  //     {
  //       "name": "analytics",
  //       "children": [
  //         {
  //           "name": "cluster",
  //           "children": bubbles
  //         }
  //       ]
  //     }
  //   ]
  // }

  // var root = d3.hierarchy(classes(data))
  //   .sum(function (d) { return d.value; })
  //   .sort(function (a, b) { return b.value - a.value; });

  // bubble(root);
};

setInterval(dataLoop, 1000)
