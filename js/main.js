const download = (output, { name, string }) => {
  const li = document.createElement('li');
  const href = document.createElement('a');
  href.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(string));
  href.setAttribute('download', name);
  href.innerText = name;

  li.appendChild(href);
  output.appendChild(li);
}

const cleanRow = row => {
  const content = {}

  Object.entries(row).forEach(([key, value]) => {
    content[key] = `${value}`.trim()
  })

  return content;
}

const parseItems = (sheet) => {

  const end = sheet['!ref'].split(':')[1]

  const json = XLSX.utils.sheet_to_json(sheet, {
    range: `A2:${end}`
  })

  const data = json.map(cleanRow)

  return {
    total: data.length,
    data,
  }
}

const parseExpGold = (sheet) => {

  const end = sheet['!ref'].split(':')[1]

  const json = XLSX.utils.sheet_to_json(sheet, {
    range: `A2:${end}`
  })

  const data = json.map(cleanRow)

  return {
    total: data.length,
    data,
  }
}

const parseAnySheet = (sheet) => {

  const json = XLSX.utils.sheet_to_json(sheet, {
    range: sheet['!ref']
  })

  const data = json.map(cleanRow)

  return {
    total: data.length,
    data,
  }
}

const parse = (buffer) => {

  let workbook = XLSX.read(buffer, { type: 'buffer' })

  const handlers = {
    'Item Stats': parseItems,
    'Strings': parseAnySheet,
    'Experience and Gold': parseExpGold,
    'Achievements': parseAnySheet,
    'Ranks': parseAnySheet,
    'Characters_info': parseAnySheet,
    'LvlUp': parseAnySheet,
    'ChestReward': parseAnySheet,
    'TutorialBoxes': parseAnySheet,
    'BattlePass': parseAnySheet,
    'Bundles_Shop': parseAnySheet,
    'InApps': parseAnySheet,
    'CurrencyConverter': parseAnySheet,
    'StringsUI': parseAnySheet,
  }

  const values = {}

  Object.entries(handlers).forEach(([name, handler]) => {
    const sheet = workbook.Sheets[name];
    if (sheet !== undefined) {
      values[name] = handler(sheet);
    }

  })

  return {
    values,
    sheets: Object.keys(handlers)
  }
}

const init = () => {
  const upload = document.getElementById('upload')
  const output = document.getElementById('output')

  upload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return false;

    output.innerHTML = ''

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = () => {
      const result = parse(reader.result);

      result.sheets.forEach(sheet => {
        const json = result.values[sheet];
        const string = JSON.stringify(json, null, 2)

        download(output, {
          name: `${sheet}.json`,
          string
        })
      })
    }

    reader.onprogress = (e) => {
      const progress = e.total > 0 ?  e.loaded / e.total : 0;
      console.log({ progress });
    }

    reader.onerror = () => {
      console.log(reader.error);

    }
  })
}

window.addEventListener('load', init);
