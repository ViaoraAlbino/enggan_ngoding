const Counter = require('./models/Counter');

const getNextSequence = async (sequenceName) => {
  const counter = await Counter.findByIdAndUpdate(
    sequenceName,
    { $inc: { seq: 1 } }, // Increment nilai seq
    { new: true, upsert: true } // Buat dokumen jika belum ada
  );
  return counter.seq;
};

module.exports = getNextSequence;