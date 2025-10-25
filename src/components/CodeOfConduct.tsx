import { motion } from 'framer-motion';

export default function CodeOfConduct() {
  return (
    <section id="code-of-conduct" className="py-20 bg-gradient-to-b from-navy/50 to-indigo/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title mb-12">
            <span className="bg-gradient-to-r from-cyan to-accent bg-clip-text text-transparent">
              Code of Conduct
            </span>
          </h2>

          <div className="glass-card p-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                .NET Conf 2025 - GLA University is dedicated to providing a harassment-free and inclusive event experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion, or any other protected category. We do not tolerate harassment of event participants in any form.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Expected Behavior</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-cyan mr-2">✓</span>
                  <span>Be respectful and considerate of others</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan mr-2">✓</span>
                  <span>Use welcoming and inclusive language</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan mr-2">✓</span>
                  <span>Be mindful of your surroundings and fellow participants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan mr-2">✓</span>
                  <span>Respect the opinions and viewpoints of others, even if they differ from your own</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Unacceptable Behavior</h3>
              <p className="text-gray-300 mb-4">
                The following behaviors are considered harassment and are unacceptable at our event:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Violence, threats of violence, or violent language</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Sexist, racist, homophobic, transphobic, or otherwise discriminatory jokes and language</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Posting or displaying sexually explicit or violent material</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Personal insults, particularly those related to gender, sexual orientation, race, religion, or disability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Inappropriate photography or recording</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Sustained disruption of talks or other events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Advocating for, or encouraging, any of the above behavior</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Consequences of Unacceptable Behavior</h3>
              <p className="text-gray-300 mb-4">
                Unacceptable behavior from any community member, including sponsors and those with decision-making authority, will not be tolerated. Anyone asked to stop unacceptable behavior is expected to comply immediately.
              </p>
              <p className="text-gray-300 mb-6">
                If a participant engages in unacceptable behavior, the event organizers may take any action they deem appropriate, up to and including a temporary ban or permanent expulsion from the event without warning and without refund.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Reporting Guidelines</h3>
              <p className="text-gray-300 mb-4">
                If you are subject to or witness unacceptable behavior, or have any other concerns, please notify a member of the event staff as soon as possible. You can also email us at:
              </p>
              <p className="mb-6">
                <a
                  href="mailto:hello@mlsa.io?subject=Code%20of%20Conduct%20Violation"
                  className="text-cyan hover:underline"
                >
                  hello@mlsa.io
                </a>
              </p>

              <div className="glass-card p-6 mt-8 border border-cyan/20">
                <h4 className="text-lg font-semibold text-cyan mb-3">Need Help?</h4>
                <p className="text-gray-300 mb-4">
                  If you feel your safety is in jeopardy or the situation is an emergency, please contact local law enforcement immediately.
                </p>
                <p className="text-gray-300">
                  For non-emergency situations, our team is here to help and ensure the event remains a welcoming space for all participants.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  This Code of Conduct is adapted from the <a href="https://confcodeofconduct.com/" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">Conference Code of Conduct</a> and is licensed under a <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">Creative Commons Attribution 3.0 Unported License</a>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
