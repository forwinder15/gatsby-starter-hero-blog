import React from "react";
import PropTypes from "prop-types";

const Sidebar = props => {
  const { children, theme } = props;

  return (
    <React.Fragment>
      <aside className="sidebar">{children}</aside>

      {/* --- STYLES --- */}
      <style jsx>{`
        .sidebar {
          padding: ${theme.space.inset.default};
        }
        @from-width tablet {
          .sidebar {
            padding: ${`calc(${theme.space.default}) calc(${theme.space.default} * 2)`};
            max-width: ${theme.text.maxWidth.tablet};
          }
        }
        @from-width desktop {
          .sidebar {
            padding: ${`calc(${theme.space.default} * 2 + 90px) 0 calc(${
              theme.space.default
            } * 2)`};
            max-width: ${theme.text.maxWidth.desktop};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired
};

export default Sidebar;
