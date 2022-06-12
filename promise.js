const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const emosiTheatherIXX = await promiseTheaterIXX();
  const emosiTheatherVGC = await promiseTheaterVGC();

  return new Promise((resolve, reject) => {
    let result = 0;
    if (!emosiTheatherIXX && !emosiTheatherVGC) {
      return reject(null);
    } else {
      if (emosi === "marah") {
        const IXXmarah = emosiTheatherIXX.filter(
          (i) => i.hasil === "marah"
        ).length;
        const VGCmarah = emosiTheatherVGC.filter(
          (i) => i.hasil === "marah"
        ).length;
        result = IXXmarah + VGCmarah;
      } else if (emosi === "tidak marah") {
        const IXXTidakMarah = emosiTheatherIXX.filter(
          (i) => i.hasil === "tidak marah"
        ).length;
        const VGCTidakMarah = emosiTheatherVGC.filter(
          (i) => i.hasil === "tidak marah"
        ).length;
        result = IXXTidakMarah + VGCTidakMarah;
      }
      return resolve(result);
    }
  });
};

module.exports = {
  promiseOutput,
};
